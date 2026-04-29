<script lang="ts">
  import type { Course } from '../lib/mock-data';

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
              
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-primary">{course.progress}% Completed</span>
              </div>
              <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div class="h-full bg-primary" style="width: {course.progress}%"></div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
