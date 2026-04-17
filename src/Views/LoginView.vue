<script setup>
import { useRouter } from 'vue-router'
import LoginContentPanel from '../Components/Login/LoginContentPanel.vue'
import LoginVisualPanel from '../Components/Login/LoginVisualPanel.vue'

import backgroundImage from '../../Background-image.png'

const router = useRouter()

function goHome() {
  router.push({ name: 'Home' })
}
</script>

<template>
  <main class="min-h-screen bg-[#f4f0ea] text-[#1f1b17]">
    <section class="grid min-h-screen lg:grid-cols-[minmax(320px,46%)_1fr]">
      <LoginContentPanel @go-home="goHome" />
      <LoginVisualPanel :background-image="backgroundImage" />
    </section>
  </main>
</template>
