<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-slate-500">
    <template v-for="(item, index) in items" :key="item.label">
      <span v-if="index > 0" class="text-slate-300">/</span>
      <span
        :class="[
          'inline-flex items-center gap-1 transition',
          item.active ? 'font-semibold text-slate-900' : 'text-slate-500',
        ]"
      >
        <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>
