import {AsyncStorage} from 'react-native'
import initDecks from './db'

export const DECK_KEY = '@Danielles:Flashcards'

export function getDecks() {
    return AsyncStorage.getItem(DECK_KEY)
     .then((res) => {
        if(JSON.parse(res) === null) {
            AsyncStorage.setItem(DECK_KEY,JSON.stringify(initDecks))
            return AsyncStorage.getItem(DECK_KEY) .then((res) => {
                 return JSON.parse(res)
         })
      }
      return JSON.parse(res)
    }) 
}

 export function addDeck(title) {  
     return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{
        title,questions:[] }}))
}

function getDeck(title){  
  return getDecks().then((res) => {
    const a = Object.keys(res).map((key) => (res[key]))
      return a.filter(i => i.title === title)
  })
}
 export function addCard(title,question,answer) {
    getDeck(title).then( q => {const questions = q[0].questions ;
       (questions.length>0)?
          AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{title,questions:[...questions,{question,answer}]}}))
        : AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{title,questions:[{question,answer}]}}))})    
   }


