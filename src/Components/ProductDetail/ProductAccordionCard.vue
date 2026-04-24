<script setup>
import { ChevronDown } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <section class="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-4 text-left"
      @click="emit('toggle')"
    >
      <h3 class="text-base font-semibold text-slate-900">{{ title }}</h3>
      <ChevronDown
        class="h-5 w-5 text-slate-500 transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
      />
    </button>

    <div v-if="open" class="mt-4 text-sm leading-6 text-slate-600">
      <slot />
    </div>
  </section>
</template>
