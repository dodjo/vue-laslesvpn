
<template>
  <section id="features" class="container mx-auto flex lg:flex-row flex-col gap-10 items-center justify-between  p-5 lg:py-20 lg:px-0">
    <div class="lg:w-1/2">
      <img src="/images/futures.svg" loading="lazy" alt="futures">
    </div>
    <div class="basis-1/2">
      <h1 class="text-2xl lg:text-4xl leading-normal font-medium mb-6">
        We Provide Many <br/>
        Features You Can Use
      </h1>
      <p class="mb-12">You can explore the features that we provide with fun and <br/> have their own functions each feature.</p>
      <ul>
        <li class="flex items-center gap-2 mb-3" v-for="feature in featuresList" :key="feature">
          <IconFeatureCheck/>
          <span>{{feature}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import IconFeatureCheck from "@/assets/icons/features-check.svg";
const featuresList = [
 'Powerful online protection.',
 'Internet without borders.',
 'Supercharged VPN.',
 'No specific time limits.'
]
</script>

