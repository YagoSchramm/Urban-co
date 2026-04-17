<script setup>
import LoginBrand from './LoginBrand.vue'
import LoginForm from './LoginForm.vue'

const emit = defineEmits(['go-home'])
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#f7f3ee] px-6 py-4 sm:px-10 sm:py-5 lg:px-14 lg:py-6">
    <LoginBrand @go-home="emit('go-home')" />

    <div class="flex flex-1 items-center">
      <LoginForm @go-home="emit('go-home')" />
    </div>
  </div>
</template>
