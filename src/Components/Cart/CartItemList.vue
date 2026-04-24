<script setup>
import CartItemCard from './CartItemCard.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  selectAllChecked: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['increment', 'decrement', 'remove', 'toggle-select-all', 'delete-selected'])
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between rounded-[1.75rem] border border-white/35 bg-white/40 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <label class="flex items-center gap-3 text-sm font-medium text-slate-700">
        <input
          :checked="selectAllChecked"
          type="checkbox"
          class="h-4 w-4 rounded border-slate-300 text-slate-950"
          @change="emit('toggle-select-all', $event.target.checked)"
        />
        Select All
      </label>

      <button
        type="button"
        class="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        @click="emit('delete-selected')"
      >
        Delete
      </button>
    </div>

    <div class="space-y-4 rounded-[2rem] border border-white/35 bg-white/35 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <CartItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @increment="emit('increment', item.id)"
        @decrement="emit('decrement', item.id)"
        @remove="emit('remove', item.id)"
      />
    </div>
  </section>
</template>
