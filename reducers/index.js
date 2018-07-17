import { combineReducer } from 'redux'
import {
    SELECT_DECK,
    setDeckView
} from '../actions'

function deck (state=[],action){
    switch(action.type){
        case SELECT_DECK:
            return{
                deckView: action.deck
            }
        default:
            return state;    
    }
}

export default deck