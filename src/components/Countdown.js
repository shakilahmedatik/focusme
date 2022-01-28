import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes, paddingSizes } from '../utils/sizes'
const minutesToMillis = min => min * 1000 * 60

export const Countdown = ({ minutes = 20, isPaused = true }) => {
  const interval = React.useRef(null)
  const countDown = () => {
    setMillis(time => {
      if (time === 0) {
        //Other features
        return time
      }
      const timeLeft = time - 1000
      //   Report the progress
      return timeLeft
    })
  }

  useEffect(() => {
    if (isPaused) {
      return
    }
    interval.current = setInterval(countDown, 1000)
    return () => clearInterval(interval.current)
  }, [isPaused])
  const [millis, setMillis] = useState(minutesToMillis(minutes))

  const formatTime = time => (time < 10 ? `0${time}` : time)
  const minute = Math.floor(millis / 1000 / 60) % 60
  const seconds = Math.floor(millis / 1000) % 60
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: paddingSizes.lg,
    backgroundColor: 'rgba(152, 15, 90, 0.3)',
  },
})
