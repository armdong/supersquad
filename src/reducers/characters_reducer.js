import characters_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'
import { createCharacter } from './helpers'

const characters = (state = characters_json, action) => {
  switch(action.type) {
    case ADD_CHARACTER:
      return state.filter(item => item.id !== action.id)
    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.id)]
    default:
      return state
  }
}

export default characters