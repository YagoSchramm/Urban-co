<script setup>
defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 sm:gap-8">
    <div v-for="step in steps" :key="step.number" class="flex items-center gap-3">
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
        :class="step.active ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-500'"
      >
        {{ step.number }}
      </div>
      <div class="space-y-0.5">
        <p class="text-sm font-medium" :class="step.active ? 'text-slate-950' : 'text-slate-400'">
          {{ step.label }}
        </p>
        <div v-if="step.active" class="h-px w-28 bg-slate-900/80" />
      </div>
    </div>
  </div>
</template>
