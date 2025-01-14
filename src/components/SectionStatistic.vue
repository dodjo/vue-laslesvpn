
<template>
  <section class="container mx-auto py-9 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-2xl shadow-2xl shadow-gray-100">
    <div class="flex flex-1 lg:py-8 py-2 gap-10 lg:justify-center border-r-0 lg:border-r-2 border-gray-100 last:border-0"
    v-for="statistic in statistics" :key="statistic"
    >
      <div class="bg-red-100 rounded-full w-14 h-14 flex justify-center items-center text-primary">
        <component :is="statistic.icon"/>
      </div>
      <div>
        <h3 class="text-2xl font-medium">{{statistic.number}}+</h3>
        <p class="text-gray-500">{{statistic.title}}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconUsers from '@/assets/icons/users.svg'
import iconLocation from '@/assets/icons/location.svg'
import iconServer from '@/assets/icons/server.svg'
import {useI18n} from "vue-i18n";
import {computed} from "vue";
const { t } = useI18n();

const statistics = computed(()=>[
  {
    icon: iconUsers,
    number: 90,
    title: t('statistics.users'),
  },
  {
    icon: iconLocation,
    number: 30,
    title: t('statistics.locations'),
  },
  {
    icon: iconServer,
    number: 50,
    title: t('statistics.servers'),
  },
]);
</script>
