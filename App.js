import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Focus } from './src/features/focus/Focus'
import { RoundedButton } from './src/components/RoundedButton'
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text style={styles.heading}>OMG! I am in ANDROID now</Text>
      ) : (
        <Focus />
      )}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
})
