<template>
  <select @change="changeLang"
      class="appearance-none border border-primary rounded-full px-4 py-2 lg:px-5 lg:py-3 text-primary text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
    <option v-for="localeItem in Tr.supportLanguages"
        :key="localeItem"
        :value="localeItem"
        :selected="localeItem === locale"
        class="text-gray-900">
      {{ localeItem === 'en' ? 'English' : 'Русский' }}
    </option>
  </select>
</template>

<script setup>
import Tr from "@/service/i18n/translation.js";
import {useI18n} from "vue-i18n";
const { t, locale } = useI18n();

const changeLang = async(e) => {
  const lang = e.target.value;
  await Tr.setLanguage(lang);
}

</script>



<style scoped>

</style>
