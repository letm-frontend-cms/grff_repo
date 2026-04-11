<script lang="ts">
  import { MOCK_PROFILE } from '../lib/mock-data';
  import StatCard from '../components/StatCard.svelte';
  import SkillBadge from '../components/SkillBadge.svelte';

  const profile = MOCK_PROFILE;
</script>

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
  <div class="grid grid-cols-3 gap-4">
    <StatCard label="Posts" value={profile.stats.posts} />
    <StatCard label="Followers" value={profile.stats.followers} />
    <StatCard label="Following" value={profile.stats.following} />
  </div>

  <!-- Skills -->
  <div class="rounded-xl border border-border bg-surface p-6">
    <h2 class="mb-4 text-lg font-semibold text-foreground">Skills</h2>
    <div class="flex flex-wrap gap-2">
      {#each profile.skills as skill (skill)}
        <SkillBadge {skill} />
      {/each}
    </div>
  </div>
</section>
