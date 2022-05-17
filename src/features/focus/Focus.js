import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'
import { fontSizes, paddingSizes, spacing } from '../../utils/sizes'
import { colors } from '../../utils/colors'

export const Focus = ({ addSubject }) => {
  const [tmpSubject, setTmpSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you'd like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onSubmitEditing={({ nativeEvent }) =>
              setTmpSubject(nativeEvent.text)
            }
            style={{ flex: 1, marginRight: spacing.md }}
          />
          <RoundedButton
            onPress={() => addSubject(tmpSubject)}
            size={50}
            title='+'
          />
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
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: { color: colors.white, fontSize: fontSizes.lg, fontWeight: 'bold' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: paddingSizes.lg,
  },
  btn: {
    borderRadius: 2,
  },
})



