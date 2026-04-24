<script setup>
import { Clock3, Package, Percent, Truck } from 'lucide-vue-next'
import ProductAccordionCard from './ProductAccordionCard.vue'

defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  shippingItems: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['toggle'])

const iconMap = {
  discount: Percent,
  package: Package,
  delivery: Truck,
  arrive: Clock3,
}
</script>

<template>
  <ProductAccordionCard title="Shipping" :open="open" @toggle="emit('toggle')">
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="item in shippingItems"
        :key="item.label"
        class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
      >
        <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
          <component :is="iconMap[item.icon] || Clock3" class="h-4 w-4" />
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ item.label }}</p>
          <p class="mt-1 text-sm font-semibold text-slate-900">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </ProductAccordionCard>
</template>
