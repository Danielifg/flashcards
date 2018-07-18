import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = '@Danielles:Flashcards'

export const initDecks =[{
  id:'React',
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
  id:'Javascript',
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
    .then((res) => {
        if( res == null){
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initDecks))
            return initDecks
        }     
        return JSON.parse(res)          
    })
}

 export function getDeck(id){
     return initDecks;
 }