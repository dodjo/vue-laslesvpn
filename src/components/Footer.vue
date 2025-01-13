<template>
  <footer id="help" class="bg-gray-50">
    <div class="container mx-auto  py-10 px-10 lg:px-0">
      <div class="flex lg:flex-row flex-col">
        <div class="lg:mr-28  mb-12">
          <img src="/images/logo.svg" alt="logo">
          <p class="mt-6 text-gray-500">
            <span class="font-medium">LaslesVPN</span> is a private virtual network that
            <br/> has unique features and has high security.</p>
          <p class="mt-6 text-gray-500">©2020LaslesVPN</p>
        </div>
        <div class="flex flex-wrap lg:gap-28 gap-10 lg:ml-auto">
          <div v-for="menu in menuList" :key="menu">
            <h3 class="text-1xl font-medium mb-6">{{menu.title}}</h3>
            <ul class="flex flex-col gap-6">
              <li v-for="link in menu.links" :key="link">
                <a :href="link.url" class="text-gray-500 hover:text-primary transition duration-300">{{link.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menuList = [
  {
    title: 'Product',
    links: [
      {
        title: 'Download',
        url: '#'
      },
      {
        title: 'Pricing',
        url: '#'
      },
      {
        title: 'Locations',
        url: '#'
      },
      {
        title: 'Server',
        url: '#'
      },
      {
        title: 'Countries',
        url: '#'
      },
      {
        title: 'Blog',
        url: '#'
      },
    ]
  },
  {
    title: 'Engage',
    links: [
      {
        title: 'LaslesVPN ?',
        url: '#'
      },
      {
        title: 'FAQ',
        url: '#'
      },
      {
        title: 'Tutorials',
        url: '#'
      },
      {
        title: 'About Us',
        url: '#'
      },
      {
        title: 'Privacy Policy',
        url: '#'
      },
      {
        title: 'Terms of Service',
        url: '#'
      },
    ]
  },
  {
    title: 'Earn Money',
    links: [
      {
        title: 'Affiliate',
        url: '#'
      },
      {
        title: 'Become Partner',
        url: '#'
      },
    ]
  }
]
</script>

