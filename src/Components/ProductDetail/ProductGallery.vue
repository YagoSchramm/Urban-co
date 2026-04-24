<script setup>
import { computed } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: Array,
    default: () => [],
  },
  selectedIndex: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['select'])

const selectedThumbnail = computed(() => props.thumbnails[props.selectedIndex] ?? props.thumbnails[0] ?? null)
</script>

<template>
  <section class="space-y-5">
    <div class="overflow-hidden rounded-[2.25rem] bg-[#f2f0eb] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      <div
        class="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#f7f5f0] via-[#efebe3] to-[#e7e1d7]"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_42%)]" />
        <img
          :src="selectedThumbnail?.image ?? imageSrc"
          :alt="selectedThumbnail?.label ?? 'Imagem do produto'"
          class="relative z-10 h-full w-full object-contain p-6 drop-shadow-[0_28px_40px_rgba(15,23,42,0.2)]"
        />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 sm:gap-5">
      <button
        v-for="(thumb, index) in thumbnails"
        :key="thumb.label"
        type="button"
        class="overflow-hidden rounded-[1.5rem] bg-[#f2f0eb] p-2 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
        :class="index === selectedIndex ? 'ring-2 ring-slate-900/80' : 'ring-1 ring-slate-200'"
        @click="emit('select', index)"
      >
        <img
          :src="thumb.image"
          :alt="thumb.label"
          class="h-32 w-full rounded-[1.1rem] object-contain bg-[#f7f5f0]"
        />
      </button>
    </div>
  </section>
</template>
