<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../Components/NavBar.vue'

import backgroundImage from '../../Background-image.png'
import iconImage from '../../Icon.png'

const router = useRouter()
</script>

<template>
  <main
    class="min-h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.64),_rgba(255,255,255,0.48)_45%,_rgba(244,240,234,0.58))]">
      <NavBar :icon="iconImage" radius-class="rounded-[1.9rem]" />

      <div class="mx-auto flex min-h-screen max-w-4xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section class="w-full rounded-[2rem] border border-white/35 bg-white/28 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <p class="text-sm uppercase tracking-[0.28em] text-slate-500">Order complete</p>
          <h1 class="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950">
            Your order is on the way.
          </h1>

          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              class="rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-white"
              @click="router.push({ name: 'Shop' })"
            >
              Back to Shop
            </button>
            <button
              type="button"
              class="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              @click="router.push({ name: 'Home' })"
            >
              Go Home
            </button>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
