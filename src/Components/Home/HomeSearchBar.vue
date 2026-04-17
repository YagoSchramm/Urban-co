<template>
  <div
    class="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-[1rem] bg-white/30 px-4 py-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md sm:rounded-[0.9rem] sm:px-7 sm:py-3"
  >
    <span
      class="search-bar__text flex-1 truncate whitespace-nowrap text-[1rem] font-normal tracking-[0.01em] text-white/95 sm:text-[1.2rem]"
    >
      A minimalist vase, a modern chair...
    </span>
    <button
      class="grid h-8 w-8 cursor-pointer place-items-center border-0 bg-transparent p-0 text-white"
      type="button"
      aria-label="Search products"
    >
      <svg class="h-7 w-7 fill-current sm:h-8 sm:w-8" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10.5 4.75a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5Zm0-1.5a7.25 7.25 0 1 1 0 14.5a7.25 7.25 0 0 1 0-14.5Zm10 17.19l-4.45-4.45l1.06-1.06l4.45 4.45l-1.06 1.06Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.search-bar__text {
  font-family: "Montserrat", "Segoe UI", sans-serif;
  font-style: normal;
}
</style>
