import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = '@Danielles:Flashcards'

const Decks =[{
  key:'React',
  title: 'React',
  questions: [
         {
       question: 'What is React?',
       answer: 'A library for managing user interfaces'
         },
         {
         question: 'Where do you make Ajax requests in React?',
         answer: 'The componentDidMount lifecycle event'
           }
       ]
},
{
  key:'Javascript',
  title:'Javascript',
  questions: [
    {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  ] 
 }
]
 
export function getDecks() {
    return  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((Decks) => {
        if( Decks == null){
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(Decks))
            return Decks
        }     
        return JSON.parse(Decks)          
    })
}

 export function getDeck(id){
     return Deck;
 }