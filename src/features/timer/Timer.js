import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { colors } from '../../utils/colors'
import { paddingSizes } from '../../utils/sizes'

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: paddingSizes.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title='Pause' onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title='Start' onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
  },
  task: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: paddingSizes.md,
  },
})
