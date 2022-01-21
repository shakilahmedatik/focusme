import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Focus = () => {
  return (
    <View style={styles.container}>
      <Text>What you'd like to focus on?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
})
