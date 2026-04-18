<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'Urban Runner',
  },
  price: {
    type: String,
    default: 'R$ 299,90',
  },
  reviews: {
    type: Number,
    default: 128,
  },
  rating: {
    type: Number,
    default: 4,
  },
  imageLabel: {
    type: String,
    default: 'Imagem do produto',
  },
  imageSrc: {
    type: String,
    default: '',
  },
})

const stars = Array.from({ length: 5 }, (_, index) => index < props.rating)
</script>

<template>
  <article
    class="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-[#f2efe8] p-6 shadow-[0_24px_40px_rgba(15,23,42,0.24)]"
  >
    <div
      class="absolute inset-0 bg-[#f2efe8] bg-cover bg-center"
      :style="props.imageSrc ? { backgroundImage: `url(${props.imageSrc})` } : undefined"
    />

    <div class="absolute inset-0 bg-slate-900/20" />
    <div class="absolute inset-0 bg-linear-to-t from-slate-950/68 via-slate-950/18 to-slate-900/10" />

    <div
      v-if="!props.imageSrc"
      class="mb-6 flex h-64 items-center justify-center rounded-[1.6rem] border border-white/10 bg-[#f2efe8]"
    >
      <span
        class="text-center font-['Montserrat_Alternates'] text-lg font-semibold text-white/75"
      >
        {{ imageLabel }}
      </span>
    </div>

    <div class="relative z-10 mt-auto flex min-h-[23rem] flex-col justify-end">
      <div class="flex items-center gap-2 text-white">
      <div class="flex items-center gap-1">
        <span
          v-for="(filled, index) in stars"
          :key="index"
          class="inline-flex h-7 w-7 items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-full w-full"
            :class="filled ? 'fill-[#ffe7a6]' : 'fill-white/45'"
          >
            <path
              d="M12 2.9l2.79 5.65 6.24.91-4.51 4.39 1.06 6.21L12 17.12 6.42 20.06l1.07-6.21-4.52-4.39 6.25-.91L12 2.9z"
              stroke="#f59e0b"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </span>
      </div>

      <p class="font-['Montserrat_Alternates'] text-xl font-medium tracking-[-0.03em] text-white">
        {{ reviews }} avaliações
      </p>
      </div>

      <div class="mt-0 flex items-end justify-between gap-4">
        <div class="space-y-1 text-white">
          <h3 class="font-['Montserrat_Alternates'] text-[2rem] font-semibold leading-none text-white">
            {{ name }}
          </h3>
          <p class="text-[1.8rem] font-semibold leading-none text-white">
            {{ price }}
          </p>
        </div>

        <div class="flex min-h-[6.5rem] items-end">
          <button
            type="button"
            aria-label="Adicionar ao carrinho"
            class="translate-y-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-white/18 shadow-[0_14px_30px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md transition-transform duration-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" class="h-8 w-8 fill-none stroke-white" stroke-width="1.9">
              <path
                d="M3.5 5h1.7l1.7 8.02a1.8 1.8 0 0 0 1.76 1.43h7.64a1.8 1.8 0 0 0 1.76-1.43L20 7.6H6.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="10" cy="18.2" r="1.3" fill="white" stroke="white" />
              <circle cx="16.7" cy="18.2" r="1.3" fill="white" stroke="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
