<template>
  <!-- Font Awesome icon that acts as a button to toggle color mode -->
  <div class="flex space-x-1 items-center">
    <span class="text-gray-500 dark:text-white text-xs hidden md:inline-block" v-if="showNextModeLabel">
      Change to {{ nextMode }}
    </span>
    <font-awesome-icon role="button"
                       class="light-mode dark-mode" size="lg"
                       @click="toggleMode"
                       @mouseenter="showNextModeLabel = true"
                       @mouseleave="showNextModeLabel = false"
                       :icon="nextModeIcon"  />
  </div>

</template>

<script setup>

const showNextModeLabel = ref(false)

// Get the current color mode
const colorMode = useColorMode()

// Define the available color modes
const modes = ['light', 'dark']

// Map icons to corresponding color modes
const nextModeIcons = { light: 'sun', dark: 'moon' }

// Calculate the next color mode
const nextMode = computed(() => modes[(modes.indexOf(colorMode.preference) + 1) % modes.length])

// Get the icon for the next color mode
const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

// Toggle the color mode when the button is clicked
const toggleMode = () => colorMode.preference = nextMode.value

</script>

<style scoped>

.light-mode{
  @apply hover:text-teal-700
}

.dark-mode{
  @apply dark:hover:text-yellow-400
}

</style>
