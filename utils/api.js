import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = '@Danielles:Flashcards'


 
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

 export function addDeck(title){
  let card = {
    id:title,
    title:title,
    questions:[]
   }

   AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(card))
   AsyncStorage.getItem(DECK_STORAGE_KEY).then((res) => { console.log(res)})
 
}

export function addCard(title){
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(
  {
    id:title,
    title:title,
    questions:[]
   })
  )
}







const initDecks =[
  { 
    id:'Jakarta',
    title:'Jakarta',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ] 
 },{
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
  id:'Rdux',
  title:'Redux',
  questions: [
    {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  ] 
 },
 {
  id:'Python',
  title:'Python',
  questions: [
    {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  ] 
 },
 {
  id:'Scala',
  title:'Scala',
  questions:[
         {
          question: 'What is a closure?',
           answer: 'The combination of a function and the lexical environment within which that function was declared.'
         }
        ] 
 }
]