<section class="relative py-16 sm:py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="mb-8 animate-pulse sm:mb-10">
      <div class="mb-3 h-4 w-32 rounded bg-white/10"></div>
      <div class="mb-4 h-10 w-96 rounded-lg bg-white/10"></div>
      <div class="h-5 w-80 rounded bg-white/10"></div>
    </div>

    <div class="flex animate-pulse gap-4 overflow-hidden sm:gap-6">
      {#each Array(4) as _}
        <div class="min-w-[260px] max-w-[260px] rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:min-w-[290px] sm:max-w-[290px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[340px] lg:max-w-[340px]">
          <div class="h-44 w-full rounded-2xl bg-white/10 sm:h-52 lg:h-56"></div>
          <div class="px-1 pb-1 pt-4 sm:px-2 sm:pb-2">
            <div class="mb-2 h-6 w-3/4 rounded bg-white/10"></div>
            <div class="mb-1 h-4 w-full rounded bg-white/10"></div>
            <div class="h-4 w-2/3 rounded bg-white/10"></div>
            <div class="mt-5 flex justify-between">
              <div class="h-4 w-20 rounded bg-white/10"></div>
              <div class="h-4 w-12 rounded bg-white/10"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
