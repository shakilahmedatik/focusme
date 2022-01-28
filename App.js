import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { Focus } from './src/features/focus/Focus'
import { RoundedButton } from './src/components/RoundedButton'
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Text style={styles.heading}>{focusSubject}</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#570530',
  },
})
