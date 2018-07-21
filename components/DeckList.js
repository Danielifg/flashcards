import React, {Component} from 'react';
import { View, Platform,StyleSheet,FlatList,Text,TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { setDeckView } from '../actions'
import {getDecks} from  '../utils/api'
import { initDecks } from  '../utils/db'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import DeckView from './DeckView'
import { Entypo } from '@expo/vector-icons'
import DeckListHeader from './DeckListHeader'

class DeckList extends Component{
    constructor(props){
        super(props)
        this.state = { 
            Decks: [],
            fetching:false
        };     
        
     
   getDecks().then(Decks => { 
            this.setState(    
           {Decks:Decks,
            fetching: false}
        )}
       ) 
    };
 
  static navigationOptions = ({ navigation }) => { 
        return {
          headerTitle: <View style={{flex:1,alignContent:'center'}}> 
                            <DeckListHeader nav={navigation}/>      
                      </View>                     
        }
      }; 
 
  componentDidMount(){
       console.log("did update")
       getDecks().then(Decks => { 
           this.setState({
               Decks:Decks, 
               fetching: false
        })})       
    } 

  shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      } 

  handleDeckSelection = (item) => {        
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
                data = {Decks}
                renderItem= {({item}) => 
                
                    <TouchableOpacity key={item.title} onPress={()=>this.handleDeckSelection(item)}>
                        <View style={styles.deck}>    
                   
                         <Text style={[styles.text,{color:textColor}]}>
                             {item.title}
                        </Text>
 
                           <Text style={{color:'gray'}}>
                                {item.questions.length}
                                {(item.questions.length)>1?'cards':'card'}                     
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
       height:70,
       flexWrap: "wrap",
       borderBottomWidth: 1,
       borderBottomColor:'#D3D3D3'

   },
   text:{
       fontSize: 25,
       textAlign: 'left',
       marginTop: 5,
   }
})



