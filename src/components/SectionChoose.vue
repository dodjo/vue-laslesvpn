<template>
  <section id="pricing" class="container mx-auto  py-10 px-10 lg:px-0">
    <div>
      <h2 class="text-2xl lg:text-4xl leading-normal font-medium mb-6 text-center">
        Choose Your Plan
      </h2>
      <p class="mb-12 text-center text-gray-500">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="group :lg:min-h-[760px] flex flex-col gap-7 bg-white text-center rounded-xl py-10 lg:p-14 border-2"
          :class="[activePlan === i ? 'border-primary' : 'border-border-color']"
          v-for="(plan, i) in plans" :key="i">
        <img class="block mx-auto mb-12 group-hover:scale-110 transition duration-300" :src="plan.img" alt="" width="145">
        <h3 class="text-2xl font-medium">{{plan.title}}</h3>
        <ul class="mx-auto">
          <li class="flex items-center gap-3 mb-3" v-for="feature in plan.features" :key="feature">
            <IconPlanCheck/>
            <span>{{feature}}</span>
          </li>
        </ul>
        <div class="mt-auto">
          <p class="mt-auto text-2xl font-bold mb-3">${{plan.price}} <span class="text-gray-500 font-normal">/mo</span></p>
          <button class="border-2 border-primary rounded-full px-8 py-3 text-primary text-base font-medium hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-red-300 transition duration-300"
          :class="[activePlan === i ? 'bg-primary text-white' : '']"
              @click="setActivePlan(i)"
          >
            Select
          </button>
        </div>

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
