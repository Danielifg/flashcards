import React, {Component} from 'react';
import { View, Platform,StyleSheet,FlatList,TouchableOpacity,RefreshControl} from 'react-native'
import styled from 'styled-components/native'
import { Constants } from 'expo'
import { setDeckView } from '../actions'
import {getDecks} from  '../utils/api'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import DeckView from './DeckView'
import { MaterialIcons } from '@expo/vector-icons'
import DeckListHeader from './DeckListHeader'
import {  Content, Icon,Text,Container, Right,Left,ListItem } from 'native-base';

class DeckList extends Component{
    constructor(props){
        super(props)
        this.state = { 
            Decks: [{title:'', questions:[]}],
            fetching:false,
            selected: new Map()
        };                  
   getDecks().then(initDecks => { 
            this.setState({Decks:Object.keys(initDecks).map((key) => (initDecks[key])),
                fetching: false})})  
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
        getDecks().then(initDecks => { 
           this.setState({
               Decks: Object.keys(initDecks).map((key) => (initDecks[key])), 
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

   onUpdate(){      
       getDecks().then(initDecks => { 
        this.setState({
            Decks: Object.keys(initDecks).map((key) => (initDecks[key])), 
            fetching: false
         })})
     _onPressItem(item) 
   }

   _onPressItem = (item) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(item.title)); // toggle
      return {selected};
    });
  };

  _keyExtractor = (item, index) => index.toString()
  
 render(){
    const { Decks, fetching, selected } = this.state
     if(!fetching){
          return(

            <Content>
           <FlatList
                data = {Decks}                
                extraData={Decks}
                keyExtractor={this._keyExtractor}           
                renderItem= {({item, index}) =>                                               
                   <ListItem selected> 
                        <TouchableOpacity  style={{flex :1,flexDirection:'row'}} onPress={()=>this.handleDeckSelection(item)}>      
                           <View style={{flex :1,flexDirection:'row', justifyContent:'space-between',
                              flexWrap:'wrap'}}>
                        
                          <View  style={{flex :1,flexDirection:'row'}}>  
                           <View> 
                             <Text style={[styles.text,{color:'gray'}]}>

                                {item.title}
                           </Text>
                           </View>  
                          
                           <View>
                           <Text style={{color:'#D3D3D3'}}>
                                {item.questions.length}
                                {(item.questions.length)>1?'cards':'card'}                     
                            </Text>
                            </View>
                        </View> 

                       <View >
                             <Icon name="arrow-forward"  color='gray' size={15} />  
                             </View>                     
                      </View>        
                      </TouchableOpacity>
                                     
                </ListItem>
                 }              
            />
                  </Content>
          
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
       padding: 5,
       paddingLeft:20,
       justifyContent: 'flex-start',
       backgroundColor: 'white',
       height:50,
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



