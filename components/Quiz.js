import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native'
 import { connect } from 'react-redux'
 import { styles } from './DeckView'
 import { Container, Header, View, DeckSwiper,
         Card, CardItem, Thumbnail, Content, Text, Left, Body, Icon } from 'native-base';


 class Quiz extends Component {

    constructor(props){
        super(props)

        this.state = { 
            current:this.props.navigation.state.params.deck.questions[0],         
            title:this.props.navigation.state.params.deck.title,            
            total:this.props.navigation.state.params.deck.questions, 
            correct:0,
            incorrect:0,
            count:0         
        };                  
        
    };

    static navigationOptions = ({ navigation }) => { 
        const { deck } = navigation.state.params
        return {
          title:  'Quiz'
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

      _onSuccess(){
          ((this.state.correct+this.state.incorrect)>=this.state.total.length-1)&&
          this.props.navigation.navigate(
              "Success",
              {
               correct:this.state.correct,
               incorrect:this.state.incorrect,
               total: this.state.total
              },
          )
      }

      _onCorrect(){
        this._onSuccess();
        this.setState({correct: this.state.correct + 1})
        console.log(this.state.correct)
        console.log(this.state.total.length)
        this._onNext()
      }


      _onIncorrect(){
        this._onSuccess();
        this.setState({incorrect: this.state.incorrect + 1})
        console.log(this.state.incorrect)
        this._onNext()
      }


     render(){
         const {current, total,count, title} = this.state    
         const currentArray=[current];
    console.log(currentArray)
    if(current)
    return(<Container> 
        <View>
          <DeckSwiper
            dataSource={currentArray}
            renderItem={item =>
                <Content padder>
              <Card style={{ elevation: 3 , alignContent:'center'}}>

                <CardItem>
                  <Left>                 
                    <Body>
                        <Text>{title}</Text>
                        <Text style={{fontSize:35,color:'#D3D3D3'}}>{item.question}</Text>   
                                       
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody style={{ alignContent:'center'}}>
                              <TouchableOpacity onPress={() => this._showAnswer(item.answer)}>        
                                   <Text style={{color:'red',textAlign:'center'}}>Answer</Text>                                                
                              </TouchableOpacity>
                </CardItem>

                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />                                  
                </CardItem>

              </Card>
              </Content >
            }
            onSwipeRight={()=> this._onCorrect()}
            onSwipeLeft={()=> this._onIncorrect()}
          />
        </View>
      </Container>)
      return <Text>Loading ...</Text>
      
       




/*          if(current) {
         return(
          <View style={styles.container}>
             <Text  style={{color:'#2196F3',fontSize:25,alignSelf:'flex-start'}}>{count} /{total.length-1}</Text> 
             
             {(total.length>1 && count!=(total.length -1))&& <TouchableOpacity  onPress={() => this._onNext()}>        
                    <Text style={{color:'#2196F3',fontSize:25,alignSelf:'flex-end',marginBottom:20}}> Next </Text>                                                
                 </TouchableOpacity>}

             <View style={styles.section}>                   
                   <Text style={{fontSize:35,color:'#D3D3D3'}}>{current.question}</Text> 
                  
                  <TouchableOpacity onPress={() => this._showAnswer(current.answer)}>        
                    <Text style={{color:'red',textAlign:'center'}}>Answer</Text>                                                
                 </TouchableOpacity>
            
            </View>      
            <View style={styles.section2}>  
                <TouchableOpacity style={style.correctBtn}  onPress={() => this._onCorrect()}>        
                    <Text style={style.txt}>Correct</Text>                                                
                </TouchableOpacity>
                <TouchableOpacity style={style.incorrectBtn}  onPress={() => this._onIncorrect()}>        
                    <Text style={style.txt}>Incorrect</Text>                                                
                </TouchableOpacity>
           </View>

          </View>
         )}
         
       
         return <Text>Loading ...</Text> */
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
})/*  */