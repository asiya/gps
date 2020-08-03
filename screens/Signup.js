import React from 'react'
import {Button, StyleSheet, Text, TextInput, View } from 'react-native'


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
  },
  textinput:{
    borderColor: '#000000',
    marginBottom: 10,
    height: 40,
    borderWidth: 1
  }
})

export default class Signup extends React.Component {
  state = {
    Loading : true,
    name: '',
    email: '',
    password:'',
    phno:'',
    org:'',
    size:'',   
    data:[]
  }

  handleNameChange = name => {
    this.setState({ name })
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  handlePhnoChange = phno => {
    this.setState({ phno })
  }

  handleOrgChange = org => {
    this.setState({ org })
  }

  handleSizeChange = size => {
    this.setState({ size })
  }

 

  onSignup = async () => {
    const { email, password } = this.state
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phno: this.state.phno,
        org: this.state.org,
        size: this.state.size,
      })      
    })
    .then(response => response.json())
    .then(responseJson => { console.log("responseJson",responseJson);this.setState({data: responseJson, Loading:false}); this.props.navigation.navigate('Detail', { item: this.state.data })})
     
      .catch(error => {
        console.error("there was an error",error);
      })
    
  }

    goToLogin = () => this.props.navigation.navigate('Login')
    render() {
      const { name, email, password, phno, org, size } = this.state
      return (
        <View style={styles.container}>
        <View style={styles.textinput}>
          <TextInput
            name='name'
            value={name}
            placeholder='Enter name'
            autoCapitalize='none'
            onChangeText={this.handleNameChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='email'
            value={email}
            placeholder='email'            
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='password'
            value={password}
            placeholder='password'
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='phno'
            value={phno}
            placeholder='phno'
            onChangeText={this.handlePhnoChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='org'
            value={org}
            placeholder='org'
            onChangeText={this.handleOrgChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='size'
            value={size}
            placeholder='size'
            onChangeText={this.handleSizeChange}
          />
        </View>
        <Button title='Signup' onPress={this.onSignup} />   
        <Button title='Go to Login' onPress={this.goToLogin} />
      </View>        
      )
    }
  }