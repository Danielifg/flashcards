import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciFitness:calendar'

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



export  async function _storeData(){
    try{
        await  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(Decks))
    }catch(error){
        console.log(error);
    }
}



export async function getDecks() {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(Decks)
}

 export function getDeck(id){
     return Deck;
 }