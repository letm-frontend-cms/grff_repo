<script lang="ts">
  import type { Course } from '../lib/types';

  export let courses: Course[] = [];
</script>

<div class="rounded-xl border border-border bg-surface p-6">
  <h2 class="mb-4 text-lg font-semibold text-foreground">Enrolled Courses</h2>
  
  {#if courses.length === 0}
    <p class="text-sm text-muted-foreground">No enrolled courses yet.</p>
  {:else}
    <div class="grid gap-4 sm:grid-cols-2">
      {#each courses as course (course.id)}
        <div class="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-primary/50 hover:shadow-sm">
          <div class="relative h-32 w-full overflow-hidden bg-muted">
            <img 
              src={course.image} 
              alt={course.title} 
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-1 flex-col p-4">
            <h3 class="mb-2 line-clamp-2 text-sm font-semibold text-foreground">{course.title}</h3>
            
            <div class="mt-auto">
              <div class="mb-3 flex items-center gap-2">
                <img src={course.instructor.avatar} alt={course.instructor.name} class="h-5 w-5 rounded-full" />
                <span class="text-xs text-muted-foreground">{course.instructor.name}</span>
              </div>
              
              <div class="flex items-center justify-between mt-2">
                <span class={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  course.status === 'completed' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {course.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
