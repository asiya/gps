import React from 'react'
import { Button, StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'


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

  handleOnLogin = async () => {
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
      <SafeAreaView style={styles.container}>
         <Text style={styles.gps}>
             GPS 
          </Text>
        <FormInput
          name='email'
          value={email}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
        />
        <FormInput
          name='password'
          value={password}
          placeholder='Password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
        />
        <View style={styles.buttonContainer}>
          <Text style={styles.forgotpassword} onPress={this.goToSignup}>
              Forgotten password?    
          </Text>

          <FormButton
            onPress={this.handleOnLogin}
            title="Log In"
          />
          
          <Text style={styles.noAccountText}>
            Don't have an account?    <Text style={styles.signup} onPress={this.goToSignup}   type='clear' >Sign Up</Text>
          </Text>
        </View>
         </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin:20,
    backgroundColor:"#ffffff"
  },

  gps: {
    alignSelf: 'center',
    marginBottom:20,
    fontSize:20,    
  },
  forgotpassword:{
    alignSelf: 'flex-end',
    marginBottom:20
  },
  noAccountText:{
    alignSelf: 'center',
    marginTop:20
  }
})
