import React, {Component} from 'react';
import { View, Platform,StyleSheet,FlatList,Text,TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { setDeckView } from '../actions'
import {getDecks} from  '../utils/api'
import { initDecks } from  '../utils/api'
import { connect } from 'react-redux'


 export class DeckList extends Component{
    constructor(props){
        super(props)

        this.state = { 
            Decks: initDecks,
            fetching:false
         
        };      
        

       /*  getDecks().then(Decks => { 
            this.setState(    
           {Decks:Decks,
            fetching: false}
        )}) 
        console.log("way")   */  
        this.handleDeckSelection = this.handleDeckSelection.bind(this);
    };

    static navigationOptions = () => { 
        return {
          title: DeckList
        }
      };

 
  /*   componentDidMount(){
        console.log("did update")
    
       getDecks().then(Decks => { 
           this.setState({
               Decks:Decks, 
               fetching: false
        })})       a
    } */

   /*  shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      } */

      
      handleDeckSelection = (item) => {   
          console.log(item)      
        this.props.setDeckView(item)          
        this.props.navigation.navigate(
              "DeckView",
              {deck: item}
       )
      }
  
 render(){
    const { Decks, fetching } = this.state
    const textColor = this.props.selected? "blue":"black"
    console.log(Decks)

     if(!fetching){
          return(
           <FlatList
                data = {initDecks}
                renderItem= {({item}) => 
                
                    <TouchableOpacity onPress  ={() => this.handleDeckSelection(item)}>
                        <View style={styles.deck}>    
                   
                         <Text style={[styles.text,{color:textColor}]}>
                             {item.title}
                        </Text>
 
                           <Text style={{color:'gray'}}>
                                {item.questions.length}
                                {(item.questions.lengtht<1)?'card':'cards'}                     
                            </Text>
                        </View>   
                     </TouchableOpacity>}
                    debug={false}
                    keyExtractor={(item,index) => item.id}
           />
         )                 
     }
   return <Text>Loading ...</Text>
     }
 }

function mapDispatchToProps(dispatch){
    return {
        setDeckView:(deck) => dispatch(setDeckView(deck))
    }
}

export default connect(null,
 mapDispatchToProps
)(DeckList);

const styles = StyleSheet.create({
    deck:{
       flexDirection: 'row',               
       padding: 10,
       justifyContent: 'center',
       backgroundColor: 'white',
       height:100,
       flexWrap: "wrap",
       borderColor: "black",
       borderWidth: 1,
       borderRadius: 10,
   },
   text:{
       fontSize: 45,
       textAlign: 'center',
       marginTop: 5,
   }
})



