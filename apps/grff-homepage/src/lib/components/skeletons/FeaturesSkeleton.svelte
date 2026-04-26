<section class="py-16 sm:py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="mb-10 animate-pulse text-center sm:mb-14">
      <div class="mx-auto mb-4 h-10 w-96 rounded-lg bg-white/10"></div>
      <div class="mx-auto h-5 w-72 rounded bg-white/10"></div>
    </div>

    <div class="grid animate-pulse grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
      {#each Array(4) as _}
        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div class="mb-5 h-12 w-12 rounded-2xl bg-white/10 sm:mb-6 sm:h-14 sm:w-14"></div>
          <div class="mb-3 h-7 w-3/4 rounded bg-white/10 sm:mb-4"></div>
          <div class="mb-1 h-4 w-full rounded bg-white/10"></div>
          <div class="h-4 w-5/6 rounded bg-white/10"></div>
        </div>
      {/each}
    </div>
  </div>
</section>
