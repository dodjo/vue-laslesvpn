<template>
  <section id="features" class="container mx-auto flex lg:flex-row flex-col gap-10 items-center justify-between p-5 lg:py-20 lg:px-0">
    <div class="lg:w-1/2">
      <img src="/images/futures.svg" loading="lazy" alt="futures" />
    </div>
    <div class="basis-1/2">
      <h1 class="text-2xl lg:text-4xl leading-normal font-medium mb-6" v-html="$t('features.title')"></h1>
      <p class="mb-12" v-html="$t('features.description')"></p>
      <ul>
        <li class="flex items-center gap-2 mb-3" v-for="(feature, index) in $tm('features.list')" :key="index">
          <IconFeatureCheck />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import IconFeatureCheck from "@/assets/icons/features-check.svg";
</script>


