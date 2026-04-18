<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import NavItem from './NavItem.vue'

const activeItem = ref('Shop')
const searchQuery = ref('')

const navItems = [
  { label: 'Shop', icon: 'shop' },
  { label: 'Cart', icon: 'cart' },
  { label: 'Profile', icon: 'profile' }
]

const props = defineProps({
  icon: { type: String, required: true }
})

const setActive = (label) => {
  activeItem.value = label
}
</script>

<template>
  <div class="fixed left-1/2 top-6 z-30 w-[min(88vw,760px)] -translate-x-1/2">
    <nav class="flex items-center gap-3 rounded-full bg-white/20 px-4 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md sm:px-5">
      <img
        class="h-9 w-auto flex-shrink-0 object-contain"
        :src="icon"
        alt="Urban Co icon"
      />
      <label class="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white/80 transition focus-within:border-white/30 focus-within:bg-white/14">
        <Search class="h-4 w-4 flex-shrink-0 stroke-[2.1]" />
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
    </nav>
  </div>
</template>
