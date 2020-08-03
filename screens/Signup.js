import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'

function Detail() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Sign</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  }
})

export default class Signup extends React.Component {
    goToLogin = () => this.props.navigation.navigate('Login')
    render() {
      return (
        <View style={styles.container}>
          <Text>Signup</Text>
          <Button title='Go to Login' onPress={this.goToLogin} />
        </View>
      )
    }
  }