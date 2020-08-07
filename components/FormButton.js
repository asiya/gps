import React from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'

const FormButton = ({ title, buttonType, buttonColor,onPress, ...rest }) => (
  
    <Button
      title={title}
      style={styles.button}
      color="#d63447"
      onPress={onPress}
    />  
  
)

const styles = StyleSheet.create({  
  button:{
    backgroundColor:"#000000"
  }
})

export default FormButton