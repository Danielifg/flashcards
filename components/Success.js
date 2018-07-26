import React,{Component} from 'react'
import { View, Text, StyleSheet,FlatList,TouchableOpacity,RefreshControl} from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { styles } from './DeckView'
import {Ionicons} from '@expo/vector-icons';


export default class Success extends Component {   

    render(){
        const{ correct, incorrect, total } = this.props.navigation.state.params
        return(
            <View style={styles.container}>            
               <Text>Score {((correct+incorrect/total.length)*10)}%</Text>
            </View>
        )
    }
}