<template>
  <div>
    <h1>Hello from </h1>
  </div>
</template>

<script setup>

useSeoMeta({
  title: 'Home',
  description: 'Bienvenido a mi portafolio',
  ogTitle: 'David Villeda',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'David Villeda',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

</script>

<style scoped>

</style>