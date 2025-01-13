<template>
  <header class="sticky top-0 bg-white z-50">
    <div class="container mx-auto flex justify-between items-center py-10 px-10 lg:px-0">
      <div class="block lg:hidden">
        <button class="text-gray-900 p-3 hover:text-primary transition duration-300"
            @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        <nav class="absolute top-0 right-0 h-screen w-full bg-white p-10 "
            :class="[isShowMenu ? 'menu-slide' : 'menu-slide-out']" v-show="isShowMenu">
          <button class="absolute top-5 right-5 text-gray-900 p-3 hover:text-primary transition duration-300"
              @click="toggleMenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul class="flex flex-col gap-7">
            <li v-for="menu in menuList" :key="menu">
              <a :href="menu.url" class="text-gray-900 p-3 hover:text-primary transition duration-300">{{menu.title}}</a>
            </li>
          </ul>
        </nav>
      </div>
      <a class="block basis-36" href="#">
        <img src="/images/logo.svg" width="150" alt="logo">
      </a>
      <nav class="hidden lg:block">
        <ul class="flex gap-7">
          <li v-for="menu in menuList" :key="menu">
            <a :href="menu.url" class="text-gray-900 p-3 hover:text-primary transition duration-300">{{menu.title}}</a>
          </li>
        </ul>
      </nav>
      <div class="flex gap-1">
        <button class="text-gray-900 px-4 py-2 lg:px-8 lg:py-3 font-medium hover:text-rose-500 transition duration-300">Sign In</button>
        <button class="border border-primary rounded-full px-4 py-2 lg:px-8 lg:py-3 text-primary text-base font-medium hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-red-300 transition duration-300">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";

const menuList = [
  {
    title: 'About',
    url: '#'
  },
  {
    title: 'Features',
    url: '#'
  },
  {
    title: 'Pricing',
    url: '#'
  },
  {
    title: 'Testimonials',
    url: '#'
  },
  {
    title: 'Help',
    url: '#'
  },
]

const isShowMenu = ref(false)

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
</script>

<style>
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.menu-slide {
  animation: slideDown 0.5s ease-out forwards;
}

.menu-slide-out {
  animation: slideUp 0.5s ease-in forwards;
}
</style>




