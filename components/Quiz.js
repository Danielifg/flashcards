import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Modal, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {styles} from './DeckView'
import {
    Container,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Content,
    Text,
    Left,
    Body,
    Icon
} from 'native-base';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            current: this.props.navigation.state.params.deck.questions[0],
            title: this.props.navigation.state.params.deck.title,
            total: this.props.navigation.state.params.deck.questions,
            modalVisible: false,
            correct: 0,
            incorrect: 0,
            count: 0
        };

    };

    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params
        return {title: 'Quiz'}
    }


    _onNext() {
        this.setState({
            count: this.state.count + 1,
            current: this.props.navigation.state.params.deck.questions[this.state.count + 1]
        })
    }

    _showAnswer = (answer) => {
        alert(answer);
    }

    _hideModal() {
        tchis.setModalVisible(!this.state.modalVisible);
    }

    _onCorrect() {

        this.setState({
            correct: this.state.correct + 1
        })
        this._onNext()

    }

    _onIncorrect() {
        this.setState({
            incorrect: this.state.incorrect + 1
        })    
        this._onNext()
    }

    render() {
        const {
            current,
            total,
            count,
            title,
            correct,
            incorrect
        } = this.state
        const currentArray = [current];

        if (count === total.length) {
            return (
                <View style={{
                    margin:"auto"
                }}>
                    <View>
                        <Text>Score {((correct + incorrect / total.length) * 10)}%</Text>
                    </View>
                </View>
            )
        } else if (current) {
            return (
                <Container
                    style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    <View>

                        <View
                            style={{
                            paddingTop: 15,
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <Text
                                style={{
                                color: '#2196F3',
                                fontSize: 25,
                                alignSelf: 'center'
                            }}>{count}
                                /{total.length}</Text>
                            <MaterialCommunityIcons
                                name='comment-question-outline'
                                size={20}
                                color='#2196F3'
                                style={{
                                marginBottom: 30
                            }}/>
                        </View>

                        <DeckSwiper
                            dataSource={currentArray}
                            renderItem={item => <Content padder>
                            <Card
                                style={{
                                elevation: 3,
                                alignItems: 'center',
                                height: 350,
                                justifyContent: 'space-around'
                            }}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text
                                                style={{
                                                color: '#2196F3',
                                                fontSize: 25
                                            }}>{title}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem
                                    style={{
                                    padding: 5
                                }}>
                                    <Text
                                        style={{
                                        fontSize: 35,
                                        color: '#D3D3D3'
                                    }}>{item.question}</Text>
                                </CardItem>
                                <CardItem
                                    cardBody
                                    style={{
                                    alignContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert(item.answer)}>
                                        <Text
                                            style={{
                                            color: '#2196F3',
                                            fontSize: 20
                                        }}>Answer</Text>
                                    </TouchableOpacity>
                                </CardItem>
                            </Card>
                        </Content >}
                            onSwipeRight={() => this._onCorrect()}
                            onSwipeLeft={() => this._onIncorrect()}/>

                    </View>

                    <View
                        style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        padding: 5,
                        marginBottom: 70
                    }}>

                        <View
                            style={{
                            flexDirection: 'column'
                        }}>
                            <MaterialCommunityIcons name='gesture-swipe-left' size={40} color='#D3D3D3'/>
                            <Text
                                style={{
                                color: '#D3D3D3'
                            }}>Incorrect</Text>
                        </View>

                        <View
                            style={{
                            flexDirection: 'column'
                        }}>
                            <MaterialCommunityIcons name='gesture-swipe-right' size={40} color='#D3D3D3'/>
                            <Text
                                style={{
                                color: '#D3D3D3'
                            }}>Correct</Text>
                        </View>

                    </View>

                </Container>
            )
        }

        return <Text>Loading ...</Text>

    }
}

const mapStateToProps = (deck) => ({currentDeck: deck, numDeckCards: deck.questions})
export default connect(mapStateToProps, null)(Quiz)

export const style = StyleSheet.create({
    correctBtn: {
        padding: 10,
        backgroundColor: 'green',
        height: 50,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 1
    },
    incorrectBtn: {
        padding: 10,
        backgroundColor: 'red',
        height: 50,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 5
    },
    txt: {
        color: 'white'
    }
})/*  */