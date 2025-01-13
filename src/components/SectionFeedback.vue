<template>
<div id="testimonials" class="container mx-auto  py-10 px-10 lg:px-0">
  <div>
    <h2 class="text-2xl lg:text-4xl  leading-normal font-medium mb-6 text-center">
      Trusted by Thousands of <br/> Happy Customer
    </h2>
    <p class="mb-12 text-center text-gray-500">These are the stories of our customers who have joined us with great<br/>
      pleasure when using this crazy feature.
    </p>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide flex flex-col p-10 bg-white  rounded-xl border-2 border-gray-200"
        v-for="(feedback, index) in feedbacks" :key="index"
        >
          <div class="flex gap-4 items-center">
            <img :src="feedback.avatar" class="block w-[50px] h-[50px] bg-gray-50 rounded-full" alt="avatar">

            <div>
              <p class="font-1xl font-medium">{{feedback.name}}</p>
              <p class="text-gray-500">{{feedback.location}}</p>
            </div>
            <div class="flex gap-2 items-center ml-auto">
              <span>{{feedback.rate}}</span>
              <IconStar/>
            </div>

          </div>

          <p class="mt-6 text-gray-500 leading-7">{{feedback.text}}</p>
        </div>
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev">
        <IconBack/>
      </div>
      <div class="swiper-button-next">
        <IconNext/>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconBack from "@/assets/icons/arrow-back.svg";
import IconNext from "@/assets/icons/arrow-next.svg";
import IconStar from "@/assets/icons/star.svg";
import {onMounted} from "vue";

const feedbacks = [
  {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    text: '“With the right credit card, you can improve your financial life by\n' +
      'building credit, earning rewards and saving money. But with hundreds\n' +
      'of credit cards on the market, it can be\n' +
      'hard to decide which one is best for you.”',
    rate: 4.5
  },
  {
    avatar: 'https://i.pravatar.cc/301',
    name: 'Yessica Christy',
    location: 'Warsaw, Poland',
    text: '“With the right credit card, you can improve your financial life by\n' +
      'building credit, earning rewards and saving money. But with hundreds\n' +
      'of credit cards on the market, it can be\n' +
      'hard to decide which one is best for you.”',
    rate: 4
  },
  {
    avatar: 'https://i.pravatar.cc/302',
    name: 'Kim Young',
    location: 'Warsaw, Poland',
    text: '“With the right credit card, you can improve your financial life by\n' +
      'building credit, earning rewards and saving money. But with hundreds\n' +
      'of credit cards on the market, it can be\n' +
      'hard to decide which one is best for you.”',
    rate: 5
  },
  {
    avatar: 'https://i.pravatar.cc/303',
    name: 'Sara',
    location: 'Warsaw, Poland',
    text: '“With the right credit card, you can improve your financial life by\n' +
      'building credit, earning rewards and saving money. But with hundreds\n' +
      'of credit cards on the market, it can be\n' +
      'hard to decide which one is best for you.”',
    rate: 4.5
  },
  {
    avatar: 'https://i.pravatar.cc/304',
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    text: '“With the right credit card, you can improve your financial life by\n' +
      'building credit, earning rewards and saving money. But with hundreds\n' +
      'of credit cards on the market, it can be\n' +
      'hard to decide which one is best for you.”',
    rate: 4.5
  },
]

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})

</script>

<style>
.swiper {
  --swiper-theme-color: #F53838;
  --swiper-pagination-bullet-size: 15px;
  padding-bottom: 80px !important;
}

.swiper-pagination {
  text-align: left !important;
}

.swiper-pagination-bullet {
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  width: 45px;
  border-radius: 15px;
}

.swiper-slide-active {
  border: 2px solid #F53838;
}

/* Swiper navigation buttons */
.swiper-button-prev, .swiper-button-next {
  top: unset;
  bottom: 0;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  border: solid 2px #F53838;
  color: #F53838;
}

.swiper-button-prev:after, .swiper-button-next:after {
  content: '';
}
.swiper-button-prev svg, .swiper-button-next svg {
  width: auto;
  height: auto;
}


.swiper-button-prev {
  left: unset;
  right: 80px;
}

.swiper-button-prev:hover, .swiper-button-next:hover {
  background: #F53838;
  color: #fff;
}
</style>
