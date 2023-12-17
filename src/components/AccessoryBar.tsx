import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import {
  getLocationAsync,
  pickImageAsync,
  takePictureAsync,
} from './mediaUtils'

export default class AccessoryBar extends React.Component<any> {
  render() {
    const { onSend, isTyping } = this.props

    return (
      <View style={styles.container}>
        <Button onPress={() => console.log('photo')} name='photo' />
        <Button onPress={() => console.log('camera')} name='camera' />
        <Button onPress={() => console.log('location')} name='my-location' />
        <Button
          onPress={() => {
            isTyping()
          }}
          name='chat'
        />
      </View>
    )
  }
}

const Button = ({
  onPress,
  name,
  ...props
}:{onPress: any, name: string}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{name}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.3)',
  },
})