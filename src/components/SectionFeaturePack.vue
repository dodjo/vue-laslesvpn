
<template>
  <section class="container mx-auto flex gap-10 items-center justify-between  py-10 px-10 lg:px-0">
    <img class="hidden lg:block w-1/2" src="/images/futures.svg" loading="lazy" alt="futures">
    <div>
      <h1 class="text-4xl leading-normal font-medium mb-6">
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

