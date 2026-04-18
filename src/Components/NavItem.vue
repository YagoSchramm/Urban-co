<script setup>
import { ShoppingBag, ShoppingCart, UserRound } from 'lucide-vue-next'

defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  active: { type: Boolean, default: false }
})

defineEmits(['click'])

const iconMap = {
  shop: ShoppingBag,
  cart: ShoppingCart,
  profile: UserRound
}
</script>

<template>
  <button
    class="group flex items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition duration-300 hover:bg-white/16 hover:text-white cursor-pointer"
    :class="active ? 'gap-2.5 px-4 py-2.5 shadow-lg shadow-black/10 bg-white/18' : 'h-10 w-10 p-0'"
    type="button"
    @click="$emit('click')"
  >
    <component :is="iconMap[icon]" class="h-4.5 w-4.5 stroke-[2.1]" />
    <span v-if="active" class="text-sm font-semibold tracking-[0.01em]">{{ label }}</span>
  </button>
</template>
