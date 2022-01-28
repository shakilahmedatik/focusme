import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { paddingSizes } from '../../utils/sizes'

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: paddingSizes.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
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
})
