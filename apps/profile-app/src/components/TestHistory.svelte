<script lang="ts">
  import type { TestResult } from '../lib/types';

  export let tests: TestResult[] = [];
</script>

<div class="rounded-xl border border-border bg-surface p-6">
  <h2 class="mb-4 text-lg font-semibold text-foreground">Test History</h2>

  {#if tests.length === 0}
    <p class="text-sm text-muted-foreground">No test history available.</p>
  {:else}
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead class="border-b border-border text-muted-foreground">
          <tr>
            <th class="pb-3 pr-4 font-medium">Course</th>
            <th class="pb-3 px-4 font-medium">Date</th>
            <th class="pb-3 px-4 font-medium">Score</th>
            <th class="pb-3 pl-4 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          {#each tests as test (test.id)}
            <tr class="transition-colors hover:bg-muted/50">
              <td class="py-3 pr-4 font-medium text-foreground">{test.courseTitle}</td>
              <td class="py-3 px-4 text-muted-foreground">{new Date(test.date).toLocaleDateString()}</td>
              <td class="py-3 px-4 text-foreground">{test.score} / {test.maxScore}</td>
              <td class="py-3 pl-4 text-right">
                <span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${test.passed ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {test.passed ? 'Passed' : 'Failed'}
                </span>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
