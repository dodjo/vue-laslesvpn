<template>
  <section class="container mx-auto flex gap-10 lg:flex-row flex-col-reverse items-center justify-between p-5 lg:py-20 lg:px-0">
    <div class="basis-1/2">
      <h1 class="text-2xl lg:text-5xl !leading-snug font-medium mb-6">
        {{ $t('hero.title') }}
      </h1>
      <p class="mb-12 font-light" v-html="$t('hero.description')">
      </p>
      <button class="text-white w-full lg:w-[250px] bg-primary rounded-lg px-20 py-4 text-base font-medium shadow-2xl shadow-red-400 hover:shadow-xl transition duration-300">
        {{ $t('hero.button') }}
      </button>
    </div>
    <div class="lg:w-1/2">
      <img src="/images/img-block-1.svg" loading="lazy" alt="">
    </div>
  </section>
</template>



