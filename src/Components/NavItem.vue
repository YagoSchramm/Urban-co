<script setup>
import { ShoppingBag, ShoppingCart, UserRound } from 'lucide-vue-next'

defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  active: { type: Boolean, default: false },
  tone: {
    type: String,
    default: 'dark',
  },
})

const emit = defineEmits(['click'])

const iconMap = {
  shop: ShoppingBag,
  cart: ShoppingCart,
  profile: UserRound
}

const toneClasses = {
  dark: {
    idle: 'border-white/15 bg-white/8 text-white hover:bg-white/16',
    active: 'bg-white/18 shadow-lg shadow-black/10',
  },
  light: {
    idle: 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
    active: 'border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10',
  },
}
</script>

<template>
  <button
    class="group flex cursor-pointer items-center justify-center rounded-2xl border transition duration-300"
    :class="active ? `gap-2.5 px-4 py-2.5 ${toneClasses[tone].active}` : `h-10 w-10 p-0 ${toneClasses[tone].idle}`"
    type="button"
    @click="emit('click')"
  >
    <component :is="iconMap[icon]" class="h-4 w-4 stroke-[2.1]" />
    <span v-if="active" class="text-sm font-semibold tracking-[0.01em]">{{ label }}</span>
  </button>
</template>
