import React from 'react'
import {StyleSheet} from 'react-native'

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,     
        backgroundColor:"#ffffff",
        justifyContent:"center"
      },
      gpsHeaderText: {
        alignSelf: 'center',
        marginTop:10,
        marginBottom:10,
        fontSize:20,    
        color:"#d63447",
        fontWeight:"600"
      },
      buttonContainer:{
        marginLeft:20,
        marginRight:20
      },
    
})

export default commonStyles