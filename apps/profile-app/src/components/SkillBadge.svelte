<script lang="ts">
  interface Props {
    skill: string;
  }

  let { skill }: Props = $props();
</script>

<span class="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground">
  {skill}
</span>
