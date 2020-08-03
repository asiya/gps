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
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: this.state.email,
        secondParam: this.state.password,
      })      
    })
    .then(response => response.json())
    .then(responseJson => { console.log("responseJson",responseJson);this.setState({data: responseJson, Loading:false}); this.props.navigation.navigate('Detail', { item: this.state.data })})
     
      .catch(error => {
        console.error("there was an error",error);
      })
    
  }

  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } = this.state

    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <TextInput
            name='email'
            value={email}
            placeholder='Enter email'
            autoCapitalize='none'
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{ margin: 10 }}>
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
  }
})
