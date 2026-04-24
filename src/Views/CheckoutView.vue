<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../Components/NavBar.vue'
import CartStepper from '../Components/Cart/CartStepper.vue'
import CheckoutStepCard from '../Components/Checkout/CheckoutStepCard.vue'

import backgroundImage from '../../Background-image.png'
import iconImage from '../../Icon.png'

const router = useRouter()

const steps = [
  { number: 1, label: 'Shopping cart', active: false },
  { number: 2, label: 'Checkout details', active: true },
  { number: 3, label: 'Order complete', active: false },
]
</script>

<template>
  <main
    class="min-h-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.64),_rgba(255,255,255,0.42)_45%,_rgba(244,240,234,0.55))]">
      <NavBar :icon="iconImage" radius-class="rounded-[1.9rem]" />

      <div class="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section class="rounded-[2rem] border border-white/35 bg-white/22 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div class="flex justify-center">
            <h1 class="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Checkout Details
            </h1>
          </div>

          <div class="mt-8">
            <CartStepper :steps="steps" />
          </div>

          <div class="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <CheckoutStepCard
              title="Shipping information"
              active
              description="This is a lightweight checkout screen to keep the cart flow as a SPA. It can be expanded into a real form later."
            >
              <div class="mt-5 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/50 bg-white/45 p-4 text-sm text-slate-600">Full name</div>
                <div class="rounded-2xl border border-white/50 bg-white/45 p-4 text-sm text-slate-600">Email address</div>
                <div class="rounded-2xl border border-white/50 bg-white/45 p-4 text-sm text-slate-600 sm:col-span-2">Delivery address</div>
              </div>
            </CheckoutStepCard>

            <CheckoutStepCard
              title="Order summary"
              description="The summary card stays visible so the flow feels closer to a real ecommerce app."
            >
              <div class="mt-5 space-y-3 text-sm text-slate-600">
                <div class="flex items-center justify-between">
                  <span>Items</span>
                  <strong class="text-slate-950">3</strong>
                </div>
                <div class="flex items-center justify-between">
                  <span>Delivery</span>
                  <strong class="text-slate-950">$15</strong>
                </div>
                <div class="flex items-center justify-between">
                  <span>Total</span>
                  <strong class="text-slate-950">$467</strong>
                </div>
              </div>

                <button
                  type="button"
                class="mt-6 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800"
                  @click="router.push({ name: 'OrderComplete' })"
                >
                  Place Order
              </button>
            </CheckoutStepCard>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
