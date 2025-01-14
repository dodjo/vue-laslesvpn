<template>
  <section id="pricing" class="container mx-auto py-10 px-10 lg:px-0">
    <div>
      <h2 class="text-2xl lg:text-4xl leading-normal font-medium mb-6 text-center">
        {{ t('pricing.title') }}
      </h2>
      <p class="mb-12 text-center text-gray-500">{{ t('pricing.description') }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
      <div
          class="group :lg:min-h-[760px] flex flex-col gap-7 bg-white text-center rounded-xl py-10 px-3 lg:p-5 border-2"
          :class="[activePlan === i ? 'border-primary' : 'border-border-color']"
          v-for="(plan, i) in plans"
          :key="i"
      >
        <img class="block mx-auto mb-12 group-hover:scale-110 transition duration-300" :src="plan.img" alt="" width="145" />
        <h3 class="text-2xl font-medium">{{ t(plan.titleKey) }}</h3>
        <ul class="mx-auto">
          <li class="flex gap-3 mb-3" v-for="feature in plan.features" :key="feature">
            <IconPlanCheck />
            <span class="text-left">{{ t(`pricing.features.${feature}`) }}</span>
          </li>
        </ul>
        <div class="mt-auto">
          <p class="mt-auto text-2xl font-bold mb-3">${{ plan.price }} <span class="text-gray-500 font-normal">{{ t('pricing.price_suffix') }}</span></p>
          <button
              class="border-2 border-primary rounded-full px-8 py-3 text-primary text-base font-medium hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-red-300 transition duration-300"
              :class="[activePlan === i ? 'bg-primary text-white' : '']"
              @click="setActivePlan(i)"
          >
            {{ t('pricing.select_button') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import IconPlanCheck from "@/assets/icons/plan-check.svg";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const plans = [
  {
    titleKey: "pricing.plans.free",
    img: "/images/box-1.svg",
    price: 0,
    features: [
      "unlimited_bandwidth",
      "encrypted_connection",
      "no_traffic_logs",
      "works_on_all_devices"
    ]
  },
  {
    titleKey: "pricing.plans.standard",
    img: "/images/box-2.svg",
    price: 9,
    features: [
      "unlimited_bandwidth",
      "encrypted_connection",
      "no_traffic_logs",
      "works_on_all_devices",
      "connect_anywhere"
    ]
  },
  {
    titleKey: "pricing.plans.premium",
    img: "/images/box-3.svg",
    price: 12,
    features: [
      "unlimited_bandwidth",
      "encrypted_connection",
      "no_traffic_logs",
      "works_on_all_devices",
      "connect_anywhere",
      "get_new_features"
    ]
  }
];

const activePlan = ref(null);

const setActivePlan = (index) => {
  activePlan.value = index;
};
</script>
