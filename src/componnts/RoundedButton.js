import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const RoundedButton = ({
  style = {},
  textSize = {},
  size = 125,
  ...props
}) => {
  return <TouchableOpacity style={[style]} />
}

const styles = style =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
    },
  })

export default RoundedButton
