import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function TextButton ({  onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text> Works</Text>  
    </TouchableOpacity>
  )
}
