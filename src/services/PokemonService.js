import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Pokemon } from '../models/Pokemon'
import { logger } from '../utils/Logger'
import { PokemonDeets } from '../models/PokemonDeets'
import axios from 'axios'

class PokemonService {
  async getAllPokemon() {
    const res = await api.get('?offset=0&limit=151')
    AppState.allPokemon = res.data.results.map(p => new Pokemon(p))
  }

  async openDeets(url) {
    const res = await axios.get(url)
    logger.log(res)
    AppState.activePokemon = new PokemonDeets(res.data)
    logger.log(AppState.activePokemon)
  }

  addToParty() {
    AppState.pokemonParty.push(AppState.activePokemon)
    logger.log(AppState.pokemonParty, 'add poke')
  }
}

export const pokemonService = new PokemonService()
