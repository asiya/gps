import React from 'react'
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'


export default class Login extends React.Component {
  state = {
    Loading : true,
    email: '',
    password: '',
    data:[]
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    fetch('http://192.168.42.162:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })      
    })
    .then(response => response.json())
    .then(responseJson => { 
      this.setState({data: responseJson, Loading:false}); 
      this.props.navigation.navigate('Detail', { item: responseJson })})
     
      .catch(error => {
        console.error("there was an error",error);
      })
    
  }

  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.textinput}>
          <TextInput
            name='email'
            value={email}
            placeholder='Enter email'
            autoCapitalize='none'
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={styles.textinput}>
          <TextInput
            name='password'
            value={password}
            placeholder='Enter password'
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button title='Login' onPress={this.onLogin} />
        
        <Button title='Go to Signup' onPress={this.goToSignup} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput:{
    borderColor: '#000000',
    marginBottom: 10,
    height: 40,
    borderWidth: 1
  }
})
