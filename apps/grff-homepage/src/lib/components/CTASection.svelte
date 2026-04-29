<script lang="ts">
  import type { CTAData } from '$lib/types/homepage';

  let { cta }: { cta: CTAData } = $props();
</script>

<section class="py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div
      class="rounded-[1.5rem] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 px-4 py-14 text-center shadow-2xl sm:rounded-[2rem] sm:px-6 sm:py-20"
    >
      <h2 class="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        {cta.title}
      </h2>

      <p class="mb-8 text-base leading-7 text-white/85 sm:text-lg md:text-xl">
        {cta.subtitle}
      </p>

      <a
        href={cta.buttonLink || '#'}
        class="inline-block rounded-xl bg-[#2b173f] px-6 py-3 font-semibold transition hover:bg-[#241236] sm:px-8 sm:py-4"
      >
        {cta.buttonText}
      </a>
    </div>
  </div>
</section>
