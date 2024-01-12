<template>
  <div class="container mx-auto">
    <header>
      <Menu/>
    </header>
    <main class="pt-20 mt-10 max-w-2xl">
      <slot/>
    </main>
  </div>
</template>

<script setup>

useHead({
  titleTemplate: '%s - David Villeda',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
      crossorigin: ''
    }
  ]
})

</script>

<style>

body {
  font-family: 'Montserrat';
}

body {
   @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}

</style>

