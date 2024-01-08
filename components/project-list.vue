<template>
  <div>
    <section v-if="pending">Loadin...</section>
    <section v-else-if="error">Soethin went wron.. try aain</section>
    <section v-else>Here is my repos!</section>
  </div>
</template>

<script setup>

const { data, pending, error } = await useFetch('https://api.github.com/users/DavidITT/repos')

console.log(data)



</script>

