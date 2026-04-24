<script setup>
import { ref } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import NavBar from '../Components/NavBar.vue'
import ProductBreadcrumb from '../Components/ProductDetail/ProductBreadcrumb.vue'
import ProductGallery from '../Components/ProductDetail/ProductGallery.vue'
import ProductPurchasePanel from '../Components/ProductDetail/ProductPurchasePanel.vue'
import ProductShippingPanel from '../Components/ProductDetail/ProductShippingPanel.vue'
import ProductRatingSummary from '../Components/ProductDetail/ProductRatingSummary.vue'
import ProductReviewCard from '../Components/ProductDetail/ProductReviewCard.vue'

import backgroundImage from '../../shop_page_background.png'
import iconImage from '../../Icon.png'

const activeImageIndex = ref(0)
const descriptionOpen = ref(true)
const shippingOpen = ref(true)
const quantity = ref(1)
const selectedColorIndex = ref(0)

const product = {
  title: 'Elite Chair',
  price: '$240.99',
  description:
    'Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood.',
  rating: 4.5,
}

const gallery = [
  { label: 'Elite Chair angle 1', image: backgroundImage },
  { label: 'Elite Chair angle 2', image: backgroundImage },
  { label: 'Elite Chair angle 3', image: backgroundImage },
]

const colors = [
  { name: 'Pearl', value: '#f3f1ee' },
  { name: 'Stone', value: '#b8b8b0' },
  { name: 'Olive', value: '#6f6a4a' },
  { name: 'Amber', value: '#b07a14' },
]

const shippingItems = [
  { icon: 'discount', label: 'Discount', value: 'Disc 50%' },
  { icon: 'package', label: 'Package', value: 'Reg' },
  { icon: 'delivery', label: 'Delivery Time', value: '3-4 Working Days' },
  { icon: 'arrive', label: 'Arrive', value: '0 - 12 Oct 2024' },
]

const summaryBars = [
  { label: '5', value: 92 },
  { label: '4', value: 78 },
  { label: '3', value: 44 },
  { label: '2', value: 18 },
  { label: '1', value: 8 },
]

const reviews = [
  {
    author: 'Obayedul',
    date: '13 Oct 2024',
    rating: 5,
    text:
      'Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette.',
  },
  {
    author: 'Maya Turner',
    date: '02 Oct 2024',
    rating: 4,
    text: 'The build feels premium and the finish is clean. It fits beautifully in a compact living room.',
  },
]

const setSelectedImage = (index) => {
  activeImageIndex.value = index
}

const incrementQuantity = () => {
  quantity.value += 1
}

const decrementQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1)
}
</script>

<template>
  <main class="min-h-screen bg-[#fbfaf8] text-slate-900">
    <NavBar :icon="iconImage" tone="light" radius-class="rounded-[1.9rem]" />

    <div class="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div class="mb-8 flex items-center gap-3 text-sm text-slate-500">
        <ChevronLeft class="h-4 w-4" />
        <ProductBreadcrumb
          :items="[
            { label: 'Home', active: false },
            { label: 'Products', active: true },
          ]"
        />
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ProductGallery
          :image-src="backgroundImage"
          :thumbnails="gallery"
          :selected-index="activeImageIndex"
          @select="setSelectedImage"
        />

        <div class="space-y-6">
          <ProductPurchasePanel
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :colors="colors"
            :selected-color-index="selectedColorIndex"
            :quantity="quantity"
            :description-open="descriptionOpen"
            @toggle-description="descriptionOpen = !descriptionOpen"
            @select-color="selectedColorIndex = $event"
            @increment="incrementQuantity"
            @decrement="decrementQuantity"
          />

          <ProductShippingPanel
            :open="shippingOpen"
            :shipping-items="shippingItems"
            @toggle="shippingOpen = !shippingOpen"
          />
        </div>
      </div>

      <div class="mt-14 space-y-6">
        <p class="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Rating & Reviews
        </p>

        <div class="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <ProductRatingSummary
            :rating="product.rating"
            :reviews-count="124"
            :summary-bars="summaryBars"
          />

          <div class="space-y-4">
            <ProductReviewCard
              v-for="review in reviews"
              :key="review.author"
              v-bind="review"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
