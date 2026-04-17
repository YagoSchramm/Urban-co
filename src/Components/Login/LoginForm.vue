<script setup>
const emit = defineEmits(['go-home'])
</script>

<template>
  <div class="w-full max-w-[25rem] lg:ml-12">
    <h1 class="font-['Montserrat_Alternates'] text-4xl font-semibold tracking-tight sm:text-5xl">
      Welcome back !
    </h1>
    <p class="mt-3 text-base leading-7 text-[#8b7c6f]">
      The faster you fill up, the faster you get a ticket
    </p>

    <form class="mt-8 space-y-5">
      <label class="block">
        <span class="mb-3 block text-[1.1rem] font-semibold text-[#2e241d]">Email</span>
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full border border-[#d8cfc5] bg-transparent px-4 py-3 text-[#1f1b17] outline-none transition placeholder:text-[#baaea1] focus:border-[#8f7d6b]"
        />
      </label>

      <label class="block">
        <span class="mb-3 block text-[1.1rem] font-semibold text-[#2e241d]">Password</span>
        <input
          type="password"
          placeholder="**********"
          class="w-full border border-[#d8cfc5] bg-transparent px-4 py-3 text-[#1f1b17] outline-none transition placeholder:text-[#baaea1] focus:border-[#8f7d6b]"
        />
      </label>

      <div class="flex items-center justify-between gap-4 text-sm text-[#6f645a]">
        <label class="flex items-center gap-3">
          <input
            type="checkbox"
            class="h-4 w-4 rounded-none border border-[#d8cfc5] accent-[#1f1b17]"
          />
          <span>Remember me</span>
        </label>
        <button type="button" class="transition hover:text-[#1f1b17]">Forgot Password</button>
      </div>

      <button
        type="submit"
        class="w-full bg-[#1f1f1f] px-4 py-3 text-base font-medium text-white transition hover:bg-black"
      >
        Sign In
      </button>

      <button
        type="button"
        class="flex w-full items-center justify-center gap-3 border border-[#d8cfc5] bg-white/40 px-4 py-3 text-base font-medium text-[#2e241d] transition hover:bg-white/70"
      >
        <span>Sign In with Google</span>
      </button>
    </form>

    <p class="mt-10 text-sm text-[#8b7c6f]">
      Don't have an account?
      <button type="button" class="ml-2 font-semibold text-[#2e241d] transition hover:opacity-70">
        Sign up
      </button>
    </p>
  </div>
</template>
