<template>
  <div>
    <h1> Blog: {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "[slug]",
  setup() {
    const route = useRoute()
    const name = route.params.slug
    return{
        name
    }
  }
}
</script>

<style scoped>

</style>