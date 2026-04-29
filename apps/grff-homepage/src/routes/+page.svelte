<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchHomepage } from '$lib/api/homepage';
  import type { HomepageData } from '$lib/types/homepage';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import FeaturedCoursesSection from '$lib/components/FeaturedCoursesSection.svelte';
  import FeaturesSection from '$lib/components/FeaturesSection.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import HeroSkeleton from '$lib/components/skeletons/HeroSkeleton.svelte';
  import StatsSkeleton from '$lib/components/skeletons/StatsSkeleton.svelte';
  import FeaturedCoursesSkeleton from '$lib/components/skeletons/FeaturedCoursesSkeleton.svelte';
  import FeaturesSkeleton from '$lib/components/skeletons/FeaturesSkeleton.svelte';
  import CTASkeleton from '$lib/components/skeletons/CTASkeleton.svelte';

  let homepage: HomepageData | null = $state(null);
  let error: string | null = $state(null);

  onMount(async () => {
    try {
      homepage = await fetchHomepage();
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to load homepage content';
    }
  });
</script>

<main>
  {#if homepage}
    <HeroSection hero={homepage.hero} />
    <StatsSection stats={homepage.stats} />
    <FeaturedCoursesSection featuredCourses={homepage.featuredCourses} />
    <FeaturesSection features={homepage.features} />
    <CTASection cta={homepage.cta} />
  {:else if error}
    <div class="flex min-h-[50vh] items-center justify-center">
      <p class="text-lg text-red-400">Something went wrong. Please try again later.</p>
    </div>
  {:else}
    <HeroSkeleton />
    <StatsSkeleton />
    <FeaturedCoursesSkeleton />
    <FeaturesSkeleton />
    <CTASkeleton />
  {/if}
</main>
