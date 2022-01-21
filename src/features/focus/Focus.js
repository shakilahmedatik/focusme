import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you'd like to focus on?</Text>
        <TextInput />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
})
