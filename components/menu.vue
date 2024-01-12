<template>
  <nav :class="{'border-b': !isNavOpen}"  class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <div>
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
          </div>
          <div>
            David Villeda
          </div>
        </div>
      </NuxtLink>
      <div class="flex space-x-1">
        <ClientOnly>
          <ColorModeSelector class="sm:block md:hidden"/>
        </ClientOnly>
        <button data-collapse-toggle="navbar-default" type="button" class="sandwich-button"
                aria-controls="navbar-default"
                @click="handleNav"
                aria-expanded="false">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="hidden w-full md:block md:h-auto md:w-auto" :class="{'open-nav': isNavOpen}"  id="navbar-default">
        <ul class="list-links md:h-auto"  :class="{'open-nav': isNavOpen}">
          <li>
            <NuxtLink to="/" class="link" @click="closeNav">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="link" @click="closeNav">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="link" @click="closeNav">Projects</NuxtLink>
          </li>
          <li>
            <ClientOnly>
              <ColorModeSelector class="hidden md:block"/>
            </ClientOnly>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

import 'flowbite';
import { ref, onMounted } from 'vue';


let collapse;

onMounted(() => {
  if (process.client) {
    const $targetEl = document.getElementById('navbar-default')
    const $triggerEl = document.getElementById('navbar-default')
    const options = {
      onCollapse: () => {
        console.log('element has been collapsed');
      },
      onExpand: () => {
        console.log('element has been expanded');
      },
      onToggle: () => {
        console.log('element has been toggled');
      },
    }

    const instanceOptions = {
      id: 'navbar-default',
      override: true
    }

    collapse = new window.Collapse($targetEl, $triggerEl, options, instanceOptions);
  }
});


const isNavOpen = ref(false)

const handleNav = () => {
  if(!isNavOpen.value){
    collapse.expand();
    isNavOpen.value = true
  }else{
    collapse.collapse();
    isNavOpen.value = false
  }
}

const closeNav = () => {
  isNavOpen.value = false;
  setTimeout(() => {
    collapse.collapse();
  }, 0);
}

</script>

<style scoped>

.open-nav{
  height: calc(100vh - 91px);
}

.link {
  @apply block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500
}

.list-links {
  @apply font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
}

.sandwich-button {
  @apply inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
}

</style>