<script setup>
import { useRouter } from 'vue-router'

// Gestion matomo en SPA
const router = useRouter()

router.afterEach(() => {
  if (import.meta.client && window._paq) {
    window._paq.push(['trackPageView'])
  }
})

</script>

<template>
  <NuxtLoadingIndicator
    color="#F36C32"
    :height="3"
    :duration="2500"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
