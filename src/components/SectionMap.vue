<template>
  <section class="container mx-auto py-10 px-10 lg:px-0">
    <div>
      <h2 class="text-2xl lg:text-4xl leading-normal font-medium mb-6 text-center">
        {{ $t('globalNetwork.title') }}
      </h2>

      <p class="text-center text-gray-500" v-html="$t('globalNetwork.description')"></p>

      <img class="w-full py-10" src="/images/map.svg" alt="map" />

      <div class="overflow-hidden whitespace-nowrap">
        <div class="grid grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center">
          <img src="/images/netflix.png" :alt="$t('globalNetwork.partners.netflix')" />
          <img src="/images/reddit.png" :alt="$t('globalNetwork.partners.reddit')" />
          <img src="/images/amazon.png" :alt="$t('globalNetwork.partners.amazon')" />
          <img src="/images/discord.png" :alt="$t('globalNetwork.partners.discord')" />
          <img src="/images/spotify.png" :alt="$t('globalNetwork.partners.spotify')" />
        </div>
      </div>
    </div>
  </section>
</template>

