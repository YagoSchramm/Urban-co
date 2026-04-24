<script setup>
import { Minus, Plus } from 'lucide-vue-next'
import ProductAccordionCard from './ProductAccordionCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    default: () => [],
  },
  selectedColorIndex: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  descriptionOpen: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['toggle-description', 'select-color', 'increment', 'decrement', 'add-to-cart', 'buy-now'])
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-4">
      <div class="space-y-3">
        <p class="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Product</p>
        <h1 class="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
          {{ title }}
        </h1>
        <p class="text-2xl font-medium text-slate-900">{{ price }}</p>
      </div>

      <ProductAccordionCard
        title="Description"
        :open="descriptionOpen"
        @toggle="emit('toggle-description')"
      >
        <p>{{ description }}</p>
      </ProductAccordionCard>
    </div>

    <div class="space-y-3">
      <p class="text-sm font-medium text-slate-500">Color</p>
      <div class="flex items-center gap-3">
        <button
          v-for="(color, index) in colors"
          :key="color.name"
          type="button"
          class="h-7 w-7 rounded-sm border transition duration-200 hover:scale-105"
          :class="index === selectedColorIndex ? 'ring-2 ring-slate-900 ring-offset-2' : 'ring-1 ring-slate-200'"
          :style="{ backgroundColor: color.value }"
          :aria-label="color.name"
          @click="emit('select-color', index)"
        />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-950 text-white transition hover:bg-slate-800"
        aria-label="Diminuir quantidade"
        @click="emit('decrement')"
      >
        <Minus class="h-4 w-4" />
      </button>
      <span class="min-w-8 text-center text-base font-medium text-slate-900">
        {{ quantity }}
      </span>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-950 text-white transition hover:bg-slate-800"
        aria-label="Aumentar quantidade"
        @click="emit('increment')"
      >
        <Plus class="h-4 w-4" />
      </button>
    </div>

    <div class="flex flex-col gap-4 sm:flex-row">
      <button
        type="button"
        class="inline-flex h-14 flex-1 items-center justify-center rounded-2xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
        @click="emit('add-to-cart')"
      >
        Add to Cart
      </button>
      <button
        type="button"
        class="inline-flex h-14 flex-1 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800"
        @click="emit('buy-now')"
      >
        Buy Now
      </button>
    </div>
  </div>
</template>
