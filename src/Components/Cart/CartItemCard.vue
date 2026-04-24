<script setup>
import { Minus, Plus, Trash2 } from 'lucide-vue-next'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['increment', 'decrement', 'remove'])
</script>

<template>
  <article
    class="flex items-center gap-4 rounded-[1.75rem] border border-white/40 bg-white/45 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:gap-5 sm:p-5"
  >
    <div
      class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[1.25rem] border border-white/60 shadow-inner"
      :style="{ background: item.thumbBackground }"
    >
      <div class="h-12 w-4 rounded-full bg-white/85 shadow-[0_10px_20px_rgba(15,23,42,0.18)]" />
    </div>

    <div class="min-w-0 flex-1">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-base font-semibold text-slate-950">{{ item.name }}</h3>
          <p class="mt-1 text-sm text-slate-500">Size: {{ item.size }}</p>
          <p class="text-sm text-slate-500">Color: {{ item.color }}</p>
        </div>

        <button
          type="button"
          class="rounded-full p-2 text-rose-500 transition hover:bg-rose-500/10"
          aria-label="Remove item"
          @click="emit('remove')"
        >
          <Trash2 class="h-4 w-4" />
        </button>
      </div>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p class="text-lg font-semibold text-slate-950">{{ item.price }}</p>

        <div class="flex items-center gap-3 rounded-full border border-white/60 bg-white/60 px-3 py-2 shadow-sm">
          <button
            type="button"
            class="rounded-full p-1.5 text-slate-700 transition hover:bg-slate-900 hover:text-white"
            aria-label="Decrease quantity"
            @click="emit('decrement')"
          >
            <Minus class="h-4 w-4" />
          </button>
          <span class="min-w-5 text-center text-sm font-semibold text-slate-900">
            {{ item.quantity }}
          </span>
          <button
            type="button"
            class="rounded-full p-1.5 text-slate-700 transition hover:bg-slate-900 hover:text-white"
            aria-label="Increase quantity"
            @click="emit('increment')"
          >
            <Plus class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
