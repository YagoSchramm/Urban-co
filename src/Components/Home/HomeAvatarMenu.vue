<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const menuRef = ref(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleDocumentClick(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    closeMenu()
  }
}

function goToLogin() {
  closeMenu()
  router.push({ name: 'Login' })
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div ref="menuRef" class="relative justify-self-end">
    <button
      type="button"
      class="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/12 text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:h-14 sm:w-14"
      aria-label="Open account menu"
      :aria-expanded="isOpen"
      @click.stop="toggleMenu"
    >
      <span class="text-lg font-semibold sm:text-xl">U</span>
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-[calc(100%+0.75rem)] w-48 rounded-2xl border border-white/20 bg-white/75 p-2 text-black shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        <p class="px-3 pb-2 pt-1 text-xs font-medium uppercase tracking-[0.24em] text-black">
          Account
        </p>
        <button
          type="button"
          class="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
          @click="goToLogin"
        >
          <span>Login</span>
            <svg class="h-[1.2rem] w-[1.2rem] fill-current sm:h-[1.65rem] sm:w-[1.65rem]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.47 4.47 9.53 3.41 18.12 12l-8.59 8.59-1.06-1.06L16.0 12 8.47 4.47Z" />
      </svg>
        </button>
      </div>
    </transition>
  </div>
</template>
