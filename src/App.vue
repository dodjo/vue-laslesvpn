<template>
  <Header/>
  <SectionHero/>
  <SectionStatistic/>
  <SectionFeaturePack/>
  <SectionChoose/>
  <SectionMap/>
  <SectionFeedback/>
  <SectionSubscribe/>
  <Footer/>
</template>


<script setup>
import Header from "@/components/Header.vue";
import SectionHero from "@/components/SectionHero.vue";
import SectionStatistic from "@/components/SectionStatistic.vue";
import SectionFeaturePack from "@/components/SectionFeaturePack.vue";
import SectionChoose from "@/components/SectionChoose.vue";
import SectionMap from "@/components/SectionMap.vue";
import Footer from "@/components/Footer.vue";
import SectionFeedback from "@/components/SectionFeedback.vue";
import SectionSubscribe from "@/components/SectionSubscribe.vue";
import Tr from "@/service/i18n/translation.js";
import {onMounted} from "vue";

onMounted(async () => {
  const locale = await Tr.getUserLocale();
  await Tr.setLanguage(locale);
})

</script>

