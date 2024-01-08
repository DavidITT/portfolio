<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">David Villeda</NuxtLink>
      </div>
      <Menu />
    </header>

    <main class="p-2 mt-10">
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
</style>

