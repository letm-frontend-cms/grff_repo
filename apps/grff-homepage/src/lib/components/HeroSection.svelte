<script lang="ts">
  import type { HeroData } from '$lib/types/homepage';

  let { hero }: { hero: HeroData } = $props();
</script>

<section class="relative flex min-h-[75vh] items-center overflow-hidden sm:min-h-[85vh]">
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_30%),radial-gradient(circle_at_right,_rgba(168,85,247,0.18),_transparent_25%),linear-gradient(to_bottom,_#080312,_#05010d)]"
  ></div>

  <div
    class="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]"
  ></div>

  <div class="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
    <div class="max-w-2xl">
      <div
        class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-violet-200 sm:px-4 sm:text-sm"
      >
        {hero.badgeText}
      </div>

      <h1 class="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {hero.titleLine1} <br />
        <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
          {hero.titleHighlight}
        </span>
      </h1>

      <p class="mb-8 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:text-xl lg:text-2xl">
        {hero.subtitle}
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <a
          href={hero.primaryButtonLink || '#'}
          class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-center font-semibold text-white shadow-xl sm:px-8 sm:py-4"
        >
          {hero.primaryButtonText}
        </a>

        <a
          href={hero.secondaryButtonLink || '#'}
          class="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center transition hover:bg-white/10 sm:px-8 sm:py-4"
        >
          {hero.secondaryButtonText}
        </a>
      </div>
    </div>
  </div>
</section>
