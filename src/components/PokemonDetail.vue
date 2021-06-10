<template>
  <div v-if="pokemon.name">
    <h4>{{ pokemon.name }} </h4>
    <img :src="pokemon.img" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      pokemon: computed(() => AppState.activePokemon)
    }
  }
}
</script>

<style>

</style>
