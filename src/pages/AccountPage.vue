<template>
  <Pokemon v-for="p in pokemonParty" :key="p.name" :pokemon="p" />
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      pokemonParty: computed(() => AppState.pokemonParty)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
