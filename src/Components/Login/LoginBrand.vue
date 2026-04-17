<script setup>
const emit = defineEmits(['go-home'])
</script>

<template>
  <button
    type="button"
    class="mb-6 flex w-fit items-center gap-2 text-left text-sm font-medium text-[#7c6f62] transition hover:text-[#1f1b17] lg:mb-8"
    @click="emit('go-home')"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      class="h-4 w-4"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
    <span>Back home</span>
  </button>
</template>
