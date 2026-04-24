<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
  summaryBars: {
    type: Array,
    default: () => [],
  },
  reviewsCount: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <section class="rounded-[2rem] bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.06)]">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-center">
      <div class="flex min-w-[9rem] flex-col">
        <span class="text-6xl font-semibold tracking-[-0.08em] text-slate-950 sm:text-7xl">
          {{ rating.toFixed(1) }}
        </span>
        <p class="mt-2 text-sm text-slate-500">{{ reviewsCount }} reviews</p>
      </div>

      <div class="flex-1 space-y-3">
        <div
          v-for="item in summaryBars"
          :key="item.label"
          class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
        >
          <span class="text-sm font-medium text-slate-700">{{ item.label }}</span>
          <div class="h-2 overflow-hidden rounded-full bg-slate-200">
            <div class="h-full rounded-full bg-slate-950" :style="{ width: `${item.value}%` }" />
          </div>
          <span class="text-sm text-slate-500">{{ item.value }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>
