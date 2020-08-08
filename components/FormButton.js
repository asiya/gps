import React from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'

const FormButton = ({ title, buttonType, buttonColor,onPress, ...rest }) => (
  
    <Button
      title={title}
      style={styles.button}
      color="#d63447"
      borderRadius = "20"
      onPress={onPress}
    />  
  
)

const styles = StyleSheet.create({  
  
})

export default FormButton