<script setup>
defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative hidden min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat lg:block"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black/30"></div>
  </div>
</template>
