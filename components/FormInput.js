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
    <Ionicons style={styles.iconStyle} name={iconName} size={20} color={iconColor}/>
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
    //margin: 15
  },
  iconStyle: {
    marginRight: 10,
  },
  input:{
    //flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom:20,
    backgroundColor: '#f6eedf',
    color: '#000',    
    borderRadius: 10
  }
})

export default FormInput