<template>
  <div>
    <section v-if="pending">Loadin...</section>
    <section v-else-if="error">Soethin went wron.. try again</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in repos" :key="repository.id"
            class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
          <a :href="repository.html_url" target="_blank" class="self-center">
            <div class="flex flex-col h-100">
              <div class="flex justify-between text-sm">
                <div class="font-semibold mb-2">{{ repository.name }}</div>
<!--                <div>{{ repository.stargazers_count }} *</div>-->
              </div>
              <p class="text-sm mb-2">
                {{repository.description }}
              </p>
              <div class="text-sm">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {{ repository.language }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>

import {computed} from "vue";

const {data, pending, error} = await useFetch('https://api.github.com/users/DavidITT/repos')

console.table(data.value)

const repos = computed(
    () => data.value.filter(repo => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
)


</script>

