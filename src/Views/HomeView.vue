<script setup>
import HomeHeader from '../Components/Home/HomeHeader.vue'
import HomeHeroContent from '../Components/Home/HomeHeroContent.vue'
import HomeSearchBar from '../Components/Home/HomeSearchBar.vue'
import HomeAvatarMenu from '../Components/Home/HomeAvatarMenu.vue'

import backgroundImage from '../../Background-image.png'
import iconImage from '../../Icon.png'
</script>

<template>
  <main
    class="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/10"></div>
    <div
      class="relative z-10 grid min-h-screen grid-rows-[auto_1fr] gap-6 px-4 py-5 sm:gap-8 sm:px-8 sm:py-6"
    >
      <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6">
        <HomeHeader :icon="iconImage" />
        <HomeSearchBar class="w-full justify-self-center" />
        <HomeAvatarMenu />
      </div>
      <HomeHeroContent />
    </div>
  </main>
</template>
