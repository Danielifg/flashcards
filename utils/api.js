import { AsyncStorage } from 'react-native'
import { Notifications, Permissions }  from 'expo'
import initDecks from './db'

export const DECK_KEY = '@Danielles:Flashcards'
export const NOTIFICATION_KEY = 'Flashcards:notifications'

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
 //   console.log("getDecks: -------------",a)
      return a.filter(i => i.title === title)
  })
}
 export function addCard(title,question,answer) {
    getDeck(title).then( q => { 
        console.log("add Card :",q)
      const questions = q[0].questions ;
      
      console.log(questions ,"questions")

      console.log(questions.length," : length")

      return  AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{title,questions:[...questions,{question,answer}]}}))
     /*   (questions.length>0)?
          AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{title,questions:[...questions,{question,answer}]}}))
        : AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({[title]:{title,questions:[{question,answer}]}}))})        */ 
    })
  }


export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}
export function createNotification(){
  return{
  title: 'Flashcards',
  body:'Quiz your new deck',
  ios:{
    sound:true
  },
  android:{
    soud:true,
    priority:'high',
    sticky: false,
    vibrate: true
  }
 }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then((data) => {
    if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if(status === 'granted'){
            Notifications.cancelAllScheduledNotificationsAsync()
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate+1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)

            Notifications.cancelAllScheduledNotificationsAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat : 'day'
              }
            )
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))          }
        })
     }
  })
}