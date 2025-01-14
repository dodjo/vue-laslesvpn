<template>
  <footer id="help" class="bg-gray-50 pt-44 md:pt-32">
    <div class="container mx-auto py-10 px-10 lg:px-0">
      <div class="flex lg:flex-row flex-col">
        <div class="lg:mr-28 mb-12">
          <img src="/images/logo.svg" alt="logo">
          <p class="mt-6 text-gray-500" v-html="t('footer.description')"></p>
          <p class="mt-6 text-gray-500">{{ t('footer.copyright') }}</p>
        </div>
        <div class="flex flex-wrap lg:gap-28 gap-10 lg:ml-auto">
          <div v-for="(menu, index) in menuList" :key="index">
            <h3 class="text-1xl font-medium mb-6">{{ t(`footer.menu.${menu.title.toLowerCase().replace(/\s+/g, '_')}`) }}</h3>
            <ul class="flex flex-col gap-6">
              <li v-for="(link, linkIndex) in menu.links" :key="linkIndex">
                <a :href="link.url" class="text-gray-500 hover:text-primary transition duration-300">
                  {{ t(`footer.menu.${link.title.toLowerCase().replace(/\s+/g, '_')}`) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const menuList = [
  {
    title: 'Product',
    links: [
      { title: 'Download', url: '#' },
      { title: 'Pricing', url: '#' },
      { title: 'Locations', url: '#' },
      { title: 'Server', url: '#' },
      { title: 'Countries', url: '#' },
      { title: 'Blog', url: '#' }
    ]
  },
  {
    title: 'Engage',
    links: [
      { title: 'LaslesVPN', url: '#' },
      { title: 'FAQ', url: '#' },
      { title: 'Tutorials', url: '#' },
      { title: 'About Us', url: '#' },
      { title: 'Privacy Policy', url: '#' },
      { title: 'Terms of Service', url: '#' }
    ]
  },
  {
    title: 'Earn Money',
    links: [
      { title: 'Affiliate', url: '#' },
      { title: 'Become Partner', url: '#' }
    ]
  }
];
</script>
