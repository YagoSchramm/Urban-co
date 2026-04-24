<script setup>
defineProps({
  couponCode: {
    type: String,
    default: '',
  },
  subtotal: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  deliveryFee: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['apply-coupon', 'checkout', 'update:couponCode'])
</script>

<template>
  <aside
    class="rounded-[2rem] border border-white/35 bg-white/45 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
  >
    <h2 class="text-lg font-semibold text-slate-950">Order Summary</h2>

    <div class="mt-5 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/55 p-3">
      <span class="text-sm text-slate-500">Coupon Code</span>
      <input
        :value="couponCode"
        type="text"
        class="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        placeholder="Enter code"
        @input="emit('update:couponCode', $event.target.value)"
      />
      <button
        type="button"
        class="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        @click="emit('apply-coupon')"
      >
        Apply
      </button>
    </div>

    <div class="mt-5 space-y-3 border-b border-slate-200/80 pb-5 text-sm">
      <div class="flex items-center justify-between text-slate-600">
        <span>Subtotal</span>
        <span class="font-semibold text-slate-900">{{ subtotal }}</span>
      </div>
      <div class="flex items-center justify-between text-slate-600">
        <span>Discount (-20%)</span>
        <span class="font-semibold text-rose-500">{{ discount }}</span>
      </div>
      <div class="flex items-center justify-between text-slate-600">
        <span>Delivery Fee</span>
        <span class="font-semibold text-slate-900">{{ deliveryFee }}</span>
      </div>
    </div>

    <div class="mt-5 flex items-center justify-between">
      <span class="text-base font-semibold text-slate-950">Total</span>
      <span class="text-2xl font-semibold tracking-[-0.05em] text-slate-950">{{ total }}</span>
    </div>

    <button
      type="button"
      class="mt-5 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-slate-800"
      @click="emit('checkout')"
    >
      Go to Checkout
    </button>
  </aside>
</template>
