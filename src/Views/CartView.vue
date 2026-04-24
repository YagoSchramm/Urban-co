<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../Components/NavBar.vue'
import CartStepper from '../Components/Cart/CartStepper.vue'
import CartItemList from '../Components/Cart/CartItemList.vue'
import CartSummaryCard from '../Components/Cart/CartSummaryCard.vue'

import backgroundImage from '../../Background-image.png'
import iconImage from '../../Icon.png'

const router = useRouter()

const items = ref([
  {
    id: 1,
    name: 'N20 Gas',
    size: 'Small',
    color: 'White',
    price: '$145',
    quantity: 2,
    thumbBackground: 'linear-gradient(180deg, rgba(246,246,246,0.95), rgba(205,210,223,0.9))',
  },
  {
    id: 2,
    name: 'Laughing Gas',
    size: 'Medium',
    color: 'Red',
    price: '$180',
    quantity: 4,
    thumbBackground: 'linear-gradient(180deg, rgba(245,246,248,0.95), rgba(164,208,227,0.88))',
  },
  {
    id: 3,
    name: 'Ammonium Gas',
    size: 'Large',
    color: 'Blue',
    price: '$240',
    quantity: 8,
    thumbBackground: 'linear-gradient(180deg, rgba(248,248,248,0.95), rgba(137,145,161,0.9))',
  },
])

const steps = [
  { number: 1, label: 'Shopping cart', active: true },
  { number: 2, label: 'Checkout details', active: false },
  { number: 3, label: 'Order complete', active: false },
]

const couponCode = ref('')
const selectedAll = ref(true)

const subtotal = computed(() => '$565')
const discount = computed(() => '-$113')
const deliveryFee = computed(() => '$15')
const total = computed(() => '$467')

const updateQuantity = (id, delta) => {
  const item = items.value.find((entry) => entry.id === id)
  if (!item) return
  item.quantity = Math.max(1, item.quantity + delta)
}

const removeItem = (id) => {
  items.value = items.value.filter((entry) => entry.id !== id)
}

const removeSelectedItems = () => {
  if (selectedAll.value) {
    items.value = []
  }
}

const applyCoupon = () => {
  couponCode.value = couponCode.value.trim()
}

const goCheckout = () => {
  router.push({ name: 'Checkout' })
}
</script>

<template>
  <main
    class="min-h-screen bg-cover bg-center bg-no-repeat text-slate-900"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.68),_rgba(255,255,255,0.46)_42%,_rgba(244,240,234,0.58))]">
      <NavBar :icon="iconImage" radius-class="rounded-[1.9rem]" />

      <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section class="rounded-[2rem] border border-white/45 bg-white/28 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div class="flex items-center justify-center">
            <h2 class="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Your Shopping Cart
            </h2>
          </div>

          <div class="mt-8">
            <CartStepper :steps="steps" />
          </div>

          <div class="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div class="space-y-5">
              <h3 class="text-xl font-semibold text-slate-950">Your cart</h3>
              <CartItemList
                :items="items"
                :select-all-checked="selectedAll"
                @increment="updateQuantity($event, 1)"
                @decrement="updateQuantity($event, -1)"
                @remove="removeItem"
                @toggle-select-all="selectedAll = $event"
                @delete-selected="removeSelectedItems"
              />
            </div>

            <CartSummaryCard
              :coupon-code="couponCode"
              :subtotal="subtotal"
              :discount="discount"
              :delivery-fee="deliveryFee"
              :total="total"
              @update:coupon-code="couponCode = $event"
              @apply-coupon="applyCoupon"
              @checkout="goCheckout"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
