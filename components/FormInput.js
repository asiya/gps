import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}) => (
  <View style={styles.inputContainer}>   
    <TextInput
      {...rest}
      placeholderTextColor="black"
      name={name}
      value={value}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  input:{    
    padding: 10,
    backgroundColor: '#f6eedf',
    color: '#000',    
    borderRadius: 10,
    marginBottom:10
  }
})

export default FormInput