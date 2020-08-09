import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const FormButton = ({ title, buttonType, buttonColor,onPress, ...rest }) => (
  <View style={styles.inputContainer}>   
    <TouchableOpacity
        style={{backgroundColor: '#d63447',borderRadius:10, padding:10}}
        onPress={onPress}
      >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
    </View>
  
)

const styles = StyleSheet.create({  
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom:10
  },
  btnText:{    
    color:"#ffffff",
    alignSelf:"center"
  }
})

export default FormButton