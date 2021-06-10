<template>
  <div class="col-3">
    <div class="card" @click="openDeets">
      <div class="card-body text-center">
        <b>
          {{ pokemon.name }}
        </b>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { pokemonService } from '../services/PokemonService'
export default {
  props: {
    pokemon: { type: Object, required: true }
  },
  setup(props) {
    const router = useRouter()
    return {
      async openDeets() {
        try {
          await pokemonService.openDeets(props.pokemon.url)
          router.push('/pokemondetails')
        } catch (error) {
          Notification.toast(error, 'error')
        }
      }
    }
  }

}
</script>

<style>

</style>
