<template>
  <section
    class="flex min-h-[calc(100vh-11rem)] max-w-[32rem] flex-col items-start justify-center pl-1 pb-6 sm:pl-7 md:pb-0"
  >
    <h1
      class="hero-content__title flex flex-col text-[4.3rem] leading-[0.88] font-bold tracking-[-0.07em] text-white drop-shadow-[0_14px_35px_rgba(0,0,0,0.18)] sm:text-[6rem] lg:text-[7.8rem]"
    >
      <span>Urban</span>
      <span>Co.</span>
    </h1>

    <p
      class="hero-content__description mt-5 max-w-[14rem] text-balance text-[1.45rem] leading-[1.15] font-normal text-white/95 sm:mt-8 sm:max-w-[20rem] sm:text-[2.1rem]"
    >
      Designed for calm, modern spaces.
    </p>

    <button
      class="hero-content__button mt-5 inline-flex w-full items-center justify-between gap-4 rounded-[0.7rem] border-0 bg-white/95 px-5 py-2.5 text-[1.2rem] tracking-[-0.03em] text-stone-800 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_55px_rgba(0,0,0,0.24)] sm:mt-9 sm:w-auto sm:px-6 sm:py-3 sm:text-[1.65rem]"
      type="button"
    >
      <span>Shop Collection</span>
      <svg class="h-[1.2rem] w-[1.2rem] fill-current sm:h-[1.65rem] sm:w-[1.65rem]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.47 4.47 9.53 3.41 18.12 12l-8.59 8.59-1.06-1.06L16.0 12 8.47 4.47Z" />
      </svg>
    </button>
  </section>
</template>

<style scoped>
.hero-content__title,
.hero-content__description,
.hero-content__button {
  font-style: normal;
}

.hero-content__title {
  font-family: "Montserrat Alternates", "Segoe UI", sans-serif;
}

.hero-content__description {
  font-family: "Montserrat Alternates", "Segoe UI", sans-serif;
}

.hero-content__button {
  font-family: "Montserrat Alternates", "Segoe UI", sans-serif;
  font-weight: 600;
}
</style>
