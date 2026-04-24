<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section
    class="rounded-[1.75rem] border p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    :class="active ? 'border-slate-900/15 bg-white/55' : 'border-white/35 bg-white/35'"
  >
    <h3 class="text-lg font-semibold text-slate-950">{{ title }}</h3>
    <p v-if="description" class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>
    <slot />
  </section>
</template>
