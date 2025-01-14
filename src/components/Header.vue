<template>
  <header ref="header" class="sticky top-0 bg-white z-50">
    <div class="container mx-auto flex justify-between items-center p-5 lg:py-10 lg:px-0">
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
      <div class="flex gap-1 lg:block hidden">
        <button class="text-gray-900 px-4 py-2 lg:px-8 lg:py-3 font-medium hover:text-rose-500 transition duration-300">Sign In</button>
        <button class="border border-primary rounded-full px-4 py-2 lg:px-8 lg:py-3 text-primary text-base font-medium hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-red-300 transition duration-300">Sign Up</button>
      </div>
      <div class="block lg:hidden">
        <button class="text-gray-900 p-3 hover:text-primary transition duration-300"
            @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        <nav class="fixed top-0 right-0 h-screen w-full bg-white p-10"
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
              <a :href="menu.url" @click="toggleMenu" class="text-gray-900 p-3 hover:text-primary transition duration-300">{{menu.title}}</a>
            </li>
            <div class="border-b border-gray-200"></div>
            <li>
              <button class="text-gray-900 px-3 hover:text-primary transition duration-300">Sign In</button>
            </li>
            <li>
              <button class="text-gray-900 px-3 hover:text-primary transition duration-300">Sign Up</button>
            </li>
          </ul>
        </nav>
      </div>
      <select v-model="$i18n.locale"
          class="appearance-none border border-primary rounded-full px-4 py-2 lg:px-8 lg:py-3 text-primary text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
        <option v-for="locale in ['en', 'ru']" :key="locale" :value="locale">
          {{ locale === 'en' ? 'English' : 'Русский' }}
        </option>
      </select>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";

const header = ref(null)

const menuList = [
  {
    title: 'About',
    url: '#'
  },
  {
    title: 'Features',
    url: '#features'
  },
  {
    title: 'Pricing',
    url: '#pricing'
  },
  {
    title: 'Testimonials',
    url: '#testimonials'
  },
  {
    title: 'Help',
    url: '#help'
  },
]

const isShowMenu = ref(false)

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    header.value.classList.remove('shadow-xl', 'shadow-gray-100')
  } else {
    header.value.classList.add('shadow-xl', 'shadow-gray-100')
  }
})
</script>

<style>
@keyframes slideRight {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideUp {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.menu-slide {
  animation: slideRight 0.3s ease-out forwards;
}

.menu-slide-out {
  animation: slideUp 0.3s ease-in forwards;
}
</style>




