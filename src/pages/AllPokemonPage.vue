<template>
  <div class="container">
    <div class="row">
      <Pokemon v-for="p in pokemon" :key="p.id" :pokemon="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'

export default {
  name: 'AllPokemon',
  setup() {
    onMounted(async() => {
      try {
        pokemonService.getAllPokemon()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      pokemon: computed(() => AppState.allPokemon)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
