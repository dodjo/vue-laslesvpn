<template>
  <section class="relative h-[100px]">
    <div class="container shadow-xl shadow-gray-100 flex flex-col md:flex-row gap-5 items-center justify-between bg-white rounded-2xl mx-auto py-10 px-10 lg:p-11">
      <div>
        <h2
            class="text-2xl lg:text-4xl leading-normal font-medium mb-6"
            v-html="$t('subscribe.title')"
        ></h2>
        <p class="text-gray-500">{{ $t('subscribe.description') }}</p>
      </div>
      <div class="w-full md:w-auto">
        <button class="text-white w-full bg-primary rounded-lg px-20 py-4 text-base font-medium shadow-2xl shadow-red-400 hover:shadow-xl transition duration-300">
          {{ $t('subscribe.button') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconPlanCheck from "@/assets/icons/plan-check.svg"
import {ref} from "vue";

const plans = [
  {
    title: "Free Plan",
    img: "/images/box-1.svg",
    price: 0,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices"
    ]
  },
  {
    title: "Standard Plan",
    img: "/images/box-2.svg",
    price: 9,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware"
    ]
  },
  {
    title: "Premium Plan",
    img: "/images/box-3.svg",
    price: 12,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features"
    ]
  }
]

const activePlan = ref(null)

const setActivePlan = (index) => {
  activePlan.value = index
}
</script>
