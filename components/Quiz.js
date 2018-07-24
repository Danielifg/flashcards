import React, {Component} from 'react';
import { 
  View,
  Platform,          
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'
 import { connect } from 'react-redux'
 import { styles } from './DeckView'

 class Quiz extends Component {

    constructor(props){
        super(props)

        this.state = { 
            current:this.props.navigation.state.params.deck.questions[0],                      
            total:this.props.navigation.state.params.deck.questions, 
            corrects:0,
            count:0         
        };                  
        
    };

    static navigationOptions = ({ navigation }) => { 
        const { deck } = navigation.state.params
        return {
          title: `${deck.title} Quiz`
        }
      }

      _onNext(){
          this.setState({
              count: this.state.count +1,
              current: this.props.navigation.state.params.deck.questions[this.state.count+1],      
          })
      }

      _showAnswer = (answer) =>{
        alert(answer);
      }

      _quiz(){
       
      }

     render(){
         const {current, total,count} = this.state       

         if(current) {
         return(
          <View style={styles.container}>
             <Text  style={{color:'#2196F3',fontSize:25,alignSelf:'flex-start'}}>{count} /{total.length-1}</Text> 
             
             {(total.length>1 && count!=(total.length -1))&&
                 <TouchableOpacity 
                     onPress={() => this._onNext()}>        
                    <Text style={{color:'#2196F3',fontSize:25,alignSelf:'flex-end',marginBottom:20}}> Next </Text>                                                
                 </TouchableOpacity>}

             <View style={styles.section}>                   
                   <Text style={{fontSize:35,color:'#D3D3D3'}}>{current.question}</Text> 
                  
                  <TouchableOpacity 
                     onPress={() => this._showAnswer(current.answer)}>        
                    <Text style={{color:'red',textAlign:'center'}}>Answer</Text>                                                
                 </TouchableOpacity>
            
            </View>      
            <View style={styles.section2}>  
                <TouchableOpacity style={style.correctBtn}  onPress={() => this._quiz()}>        
                    <Text style={style.txt}>Correct</Text>                                                
                </TouchableOpacity>
                <TouchableOpacity style={style.incorrectBtn}  onPress={() => this._quiz()}>        
                    <Text style={style.txt}>Incorrect</Text>                                                
                </TouchableOpacity>
           </View>

          </View>
         )}
         return <Text>Loading ...</Text>
     }
 }

 const mapStateToProps = (deck) => ({
  currentDeck: deck,
  numDeckCards: deck.questions 
})
export default connect(mapStateToProps,null)(Quiz)

export const style = StyleSheet.create({
  correctBtn:{
     padding: 10,
     backgroundColor: 'green',
     height:50,
     borderColor: "white",
     borderWidth: 3,
     borderRadius: 1,           
 },
 incorrectBtn:{
     padding: 10,
     backgroundColor: 'red',
     height:50,
     borderColor: "white",
     borderWidth: 3,
     borderRadius: 5,           
 },
 txt:{
   color:'white'
 }
})