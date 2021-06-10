<template>
  <div class="container">
    <div class="row justify-content-center">
      <PokemonDetail />
    </div>
    <div class="row">
      <button class="btn btn-danger" @click="addToParty">
        Catch
      </button>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
// import { onMounted } from '@vue/runtime-core'
// import { logger } from '../utils/Logger'
// import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'PokemonDeets',
  setup() {
    const state = reactive({
      currentPokemon: computed(() => AppState.activePokemon)
    })
    return {
      state,
      addToParty() {
        pokemonService.addToParty()
      }
    }
  }

}
</script>

<style>

</style>
