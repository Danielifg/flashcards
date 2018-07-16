import {
    SELECT_DECK,
    setDeckView
} from '../actions'

function deck (state=[],actions){
    switch(action.type){
        case SELECT_DECK:
            return{
                deckView: action.deck
            }
        default:
            return state;    
    }
}