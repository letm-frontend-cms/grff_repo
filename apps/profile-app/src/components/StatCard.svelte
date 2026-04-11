<script lang="ts">
  interface Props {
    label: string;
    value: number;
  }

  let { label, value }: Props = $props();
</script>

<div class="rounded-xl border border-border bg-surface p-4 text-center">
  <p class="text-2xl font-bold text-foreground">{value.toLocaleString()}</p>
  <p class="mt-1 text-sm text-muted-foreground">{label}</p>
</div>
