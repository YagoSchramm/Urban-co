<script setup>
import backgroundImage from '../../shop_page_background.png'
import iconImage from '../../Icon.png'
import NavBar from '../Components/NavBar.vue'
import ProductCard from '../Components/Shop/ProductCard.vue'

</script>
<template>
  <main class="relative min-h-screen overflow-hidden bg-slate-950">
    <NavBar :icon="iconImage" />

    <div
      class="hero-section bg-cover bg-center bg-no-repeat h-[65vh] flex items-center justify-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h1
        class="hero-content__title flex flex-col text-[4.3rem] leading-[0.88] font-bold tracking-[-0.07em] text-white drop-shadow-[0_14px_35px_rgba(0,0,0,0.18)] sm:text-[6rem] lg:text-[7.8rem] text-center"
      >
        <span>Shop our</span>
        <span>new </span>
        <span>Collection.</span>
      </h1>
    </div>
    <div
      class="content-section relative -mt-16 rounded-3xl bg-white px-8 py-16 shadow-2xl shadow-slate-900/10"
    >
     <div class=" flex flex-row flex-wrap max-w-full justify-center lg:justify-start gap-8">
       
          <ProductCard
            name="Urban Classic"
            price="R$ 249,90"
            :reviews="284"
            :rating="4"
            :image-src="backgroundImage"
            image-label="Imagem do produto"
          />
            <ProductCard
            name="Urban Classic"
            price="R$ 249,90"
            :reviews="284"
            :rating="4"
            :image-src="backgroundImage"
            image-label="Imagem do produto"
          />
            <ProductCard
            name="Urban Classic"
            price="R$ 249,90"
            :reviews="284"
            :rating="4"
            :image-src="backgroundImage"
            image-label="Imagem do produto"
          />
      </div>
    </div>
  </main>
</template>



<style>

</style>
