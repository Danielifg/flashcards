import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {Container, Content, InputGroup, Input, Button} from 'native-base'
import {Entypo} from '@expo/vector-icons'
import {addCard} from '../utils/api'
import {connect} from 'react-redux'


class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            answer: '',
            deck: ''
        };
    };
   


    _addNewCard(question, answer) {   
      console.log(this.props.deckTitle.deck.title,question,answer);
          addCard(this.props.deckTitle.deck.title,question,answer);
    }

    render() {
        const {question, answer} = this.state
        return (
            <Container style={{
                flex: 1
            }}>
                <Content contentContainerStyle={css.content}>

                    <Text style={{
                        fontSize: 45
                    }}>Add a new Card !</Text>

                    <InputGroup borderType='underline'>
                        <Entypo name='edit' size={45} color='#2196F3'/>
                        <Input
                            name='question'
                            placeholder="Question"
                            onChangeText={(textQuestion) => {
                            this.setState({question: textQuestion})
                        }}
                            value={this.state.question}/>
                    </InputGroup>

                    <InputGroup borderType='underline'>
                        <Entypo name='edit' size={45} color='#2196F3'/>
                        <Input
                            name='answer'
                            placeholder="Answer"
                            onChangeText={(textAnswer) => {
                            this.setState({answer: textAnswer})
                        }}
                            value={this.state.answer}/>
                    </InputGroup>

                    <View style={{flexDirection: 'row',justifyContent:'center'}}>
                        <Button
                            style={{backgroundColor:'#2196F3', 
                            marginBottom:70,width:200, 
                            height:50,justifyContent:'center' }}
                            onPress={() => this._addNewCard(question, answer)}>

                            <Text style={{fontSize:25, color:'white',margin:'auto'}}> Submit</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state, {navigation}) {
    const {deckTitle, deck} = navigation.state.params

    return {deckTitle, deck}
}

export default connect(mapStateToProps, null)(AddCard)

const css = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'stretch'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10
    },
    text: {
        padding: 10,
        color: 'white'
    },
    textBubbleBackground: {
        backgroundColor: '#2f7bf6',
        borderRadius: 20,
        width: 110,
        margin: 20
    }
});