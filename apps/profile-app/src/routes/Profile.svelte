<script lang="ts">
  import { onMount } from 'svelte';
  import type { UserProfile } from '../lib/types';
  import { api } from '../lib/api';
  import StatCard from '../components/StatCard.svelte';
  import SkillBadge from '../components/SkillBadge.svelte';
  import EnrolledCourses from '../components/EnrolledCourses.svelte';
  import TestHistory from '../components/TestHistory.svelte';

  let profile: UserProfile = {
    name: '',
    username: '',
    email: '',
    bio: '',
    location: '',
    website: '',
    joinedDate: '',
    avatar: '',
    stats: { posts: 0, followers: 0, following: 0 },
    skills: [],
    enrolledCourses: [],
    testHistory: []
  };
  let loading = true;
  let error = '';

  onMount(async () => {
    try {
      // Fetch user profile from API
      let data;
      try {
        data = await api.getUserProfile();
      } catch (fetchErr) {
        console.warn('API profile fetch failed:', fetchErr);
      }
      
      if (data?.success && data?.data && data?.data?.user) {
        const user = data.data.user;
        
        // Map API data to profile state
        profile = {
          ...profile,
          name: user.name || '',
          username: user.username || '',
          email: user.email || '',
          bio: user.bio || '',
          location: user.location || '',
          website: user.website || '',
          avatar: user.name ? user.name.substring(0, 2).toUpperCase() : '',
          joinedDate: user.createdAt 
            ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) 
            : '',
          skills: user.skills || [],
        };
      } else {
        error = data?.message || 'Failed to fetch profile';
        console.error('API returned an error:', error);
      }

      // Fetch user enrolled courses
      try {
        const coursesData = await api.getUserCourses();
        
        if (coursesData.success && coursesData.data) {
          const inProgress = coursesData.data.inProgress || [];
          const completed = coursesData.data.completed || [];
          
          const mapApiCourse = (c: any, status: 'in-progress' | 'completed') => ({
            id: c._id || Math.random(),
            slug: c.slug || '',
            title: c.title || 'Course',
            image: c.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
            instructor: c.instructor || { name: 'Instructor', avatar: 'https://i.pravatar.cc/150' },
            status
          });
          
          const apiCourses = [
            ...inProgress.map((c: any) => mapApiCourse(c, 'in-progress')),
            ...completed.map((c: any) => mapApiCourse(c, 'completed'))
          ];

          if (apiCourses.length > 0) {
            profile.enrolledCourses = apiCourses;
          }
        }
      } catch (coursesErr) {
        console.warn('Failed to fetch courses API:', coursesErr);
      }

      // Fetch user test history
      try {
        const testsData = await api.getUserTestHistory();
        
        if (testsData.success && testsData.data) {
          const apiTests = testsData.data.map((t: any) => ({
            id: t.id,
            courseId: t.courseId,
            courseTitle: t.courseTitle,
            score: t.score,
            maxScore: t.maxScore,
            date: t.date ? new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown',
            passed: t.passed
          }));

          profile.testHistory = apiTests;
        }
      } catch (testsErr) {
        console.warn('Failed to fetch test history API:', testsErr);
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error occurred';
      console.error('Error fetching profile:', err);
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="flex min-h-[50vh] items-center justify-center">
    <div class="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
{:else}
  <section class="space-y-8">
    <!-- Hero -->
    <div class="flex flex-col items-center gap-6 rounded-xl border border-border bg-surface p-8 sm:flex-row sm:items-start">
      <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
        {profile.avatar}
      </div>
      <div class="flex-1 text-center sm:text-left">
        <h1 class="text-2xl font-bold text-foreground">{profile.name}</h1>
        <p class="text-sm text-muted-foreground">@{profile.username}</p>
        <p class="mt-2 text-foreground">{profile.bio}</p>
        <div class="mt-3 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground sm:justify-start">
          {#if profile.location}
            <span>📍 {profile.location}</span>
          {/if}
          {#if profile.website}
            <a href={profile.website} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
              🔗 {profile.website}
            </a>
          {/if}
          <span>📅 Joined {profile.joinedDate}</span>
        </div>
      </div>
      <a
        href="/#/settings"
        class="shrink-0 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
      >
        Edit Profile
      </a>
    </div>

    <!-- Stats -->
    <!-- <div class="grid grid-cols-3 gap-4">
      <StatCard label="Posts" value={profile.stats.posts} />
      <StatCard label="Followers" value={profile.stats.followers} />
      <StatCard label="Following" value={profile.stats.following} />
    </div> -->

    <!-- Skills -->
    <div class="rounded-xl border border-border bg-surface p-6">
      <h2 class="mb-4 text-lg font-semibold text-foreground">Skills</h2>
      <div class="flex flex-wrap gap-2">
        {#each profile.skills as skill (skill)}
          <SkillBadge {skill} />
        {/each}
      </div>
    </div>

    <!-- Enrolled Courses -->
    <EnrolledCourses courses={profile.enrolledCourses} />

    <!-- Test History -->
    <TestHistory tests={profile.testHistory} />
  </section>
{/if}
