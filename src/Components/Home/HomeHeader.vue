<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="flex items-center justify-start">
    <img
      class="block h-auto w-11 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] sm:w-14"
      :src="icon"
      alt="Urban Co logo"
    />
  </header>
</template>
