import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView, Text, Platform } from 'react-native'
import { Focus } from './src/features/focus/Focus'
import { Timer } from './src/features/timer/Timer'
import { colors } from './src/utils/colors'
import { paddingSizes } from './src/utils/sizes'
export default function App() {
  const [focusSubject, setFocusSubject] = useState('Coding')
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkMaroon,
    paddingTop: Platform.OS == 'android' ? paddingSizes.xl : paddingSizes.xxl,
  },
})
