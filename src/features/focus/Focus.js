import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you'd like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 20 }} />
          <RoundedButton size={50} title='+' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
})
