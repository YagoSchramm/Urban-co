<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { Search } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import gsap from 'gsap'
import NavItem from './NavItem.vue'

const searchQuery = ref('')
const route = useRoute()
const router = useRouter()

const navItems = [
  { label: 'Shop', icon: 'shop' },
  { label: 'Cart', icon: 'cart' },
  { label: 'Profile', icon: 'profile' }
]

const props = defineProps({
  icon: { type: String, required: true },
  radiusClass: {
    type: String,
    default: 'rounded-[1.5rem]',
  },
})

const setActive = (label) => {
  const routeMap = {
    Shop: { name: 'Shop' },
    Cart: { name: 'Cart' },
    Profile: { name: 'Login' },
  }

  router.push(routeMap[label] ?? { name: 'Shop' })
}

const activeItem = computed(() => {
  if (route.name === 'Cart') return 'Cart'
  if (route.name === 'Login') return 'Profile'
  if (route.name === 'ProductDetail' || route.name === 'Shop') return 'Shop'
  if (route.name === 'Checkout') return 'Cart'
  if (route.name === 'OrderComplete') return 'Cart'
  return 'Shop'
})

const navRef = ref(null)
const navInnerRef = ref(null)

const animateIntro = () => {
  if (!navRef.value || !navInnerRef.value) return

  gsap.fromTo(
    navRef.value,
    { y: -18, opacity: 0, scale: 0.96 },
    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
  )

  gsap.fromTo(
    navInnerRef.value.children,
    { y: 8, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power2.out', delay: 0.1 },
  )
}

onMounted(async () => {
  await nextTick()
  gsap.fromTo(
    navRef.value,
    {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 18px 50px rgba(0, 0, 0, 0.14)',
      duration: 0.8,
      ease: 'power3.out',
    },
  )
  animateIntro()
})
</script>

<template>
  <div class="fixed left-1/2 top-6 z-30 w-[min(88vw,760px)] -translate-x-1/2">
    <nav
      ref="navRef"
      class="flex items-center gap-3 border border-white/15 bg-white/20 px-4 py-2 text-white backdrop-blur-md sm:px-5"
      :class="radiusClass"
    >
      <div ref="navInnerRef" class="flex w-full items-center gap-3">
        <img
          class="h-9 w-auto flex-shrink-0 object-contain"
          :src="icon"
          alt="Urban Co icon"
        />
        <label
          class="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white/80 transition focus-within:border-white/30 focus-within:bg-white/14"
        >
          <Search class="h-4 w-4 flex-shrink-0 stroke-[2.1] text-white/70" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search products"
            class="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-white/55 outline-none"
          />
        </label>
        <div class="flex items-center gap-2 sm:gap-3">
          <NavItem
            v-for="item in navItems"
            :key="item.label"
            :label="item.label"
            :icon="item.icon"
            :active="activeItem === item.label"
            @click="setActive(item.label)"
          />
        </div>
      </div>
    </nav>
  </div>
</template>
