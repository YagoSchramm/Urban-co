<script setup>
defineProps({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  text: {
    type: String,
    required: true,
  },
})

const starPath = 'M12 2.9l2.79 5.65 6.24.91-4.51 4.39 1.06 6.21L12 17.12 6.42 20.06l1.07-6.21-4.52-4.39 6.25-.91L12 2.9z'
</script>

<template>
  <article class="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-base font-semibold text-slate-900">{{ author }}</h3>
        <div class="mt-2 flex items-center gap-1">
          <svg
            v-for="index in 5"
            :key="index"
            viewBox="0 0 24 24"
            class="h-4 w-4"
            :class="index <= rating ? 'fill-amber-400' : 'fill-slate-200'"
          >
            <path :d="starPath" stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" />
          </svg>
        </div>
      </div>

      <p class="text-sm text-slate-400">{{ date }}</p>
    </div>

    <p class="mt-4 text-sm leading-6 text-slate-600">
      "{{ text }}"
    </p>
  </article>
</template>
