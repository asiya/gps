import React from 'react'
import { Button, StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'


export default class Login extends React.Component {
  
  state = {
    Loading : true,
    email: '',
    password: '',
    data:[],
    disabled:true
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
             Global Platform for Startup's 
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

            <TouchableOpacity
              style={{backgroundColor: this.state.disabled ? '#ff847c': '#d63447',borderRadius:10, padding:10}}
              onPress={this.handleOnLogin}
            >
            <Text style={styles.loginText} disabled={this.state.disabled}>Log In</Text>
            </TouchableOpacity>   

          <View style={styles.bottomSignUp}>
            <Text style={styles.noAccountText}>
                Don't have an account? <Text style={styles.signup} onPress={this.goToSignup}   type='clear' ><Text style={styles.signUpText}>Sign Up</Text></Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    backgroundColor:"#ffffff",
    justifyContent:"center"
  },
  
  buttonContainer:{
    marginLeft:20,
    marginRight:20
  },

  gps: {
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10,
    fontSize:20,    
    color:"#d63447",
    fontWeight:"600"
  },
  forgotpassword:{
    alignSelf: 'flex-end',
    marginBottom:20,
    color:"#d63447",
    fontWeight:"600",
  },
  noAccountText:{
   
  },
  button:{
    borderRadius:10,
    padding:10,   
    backgroundColor:"#d63447"
  },
  loginText:{
    alignSelf: 'center',    
    color:"#ffffff",
  },
  signUpText:{
    color:"#d63447",
    fontWeight:"600",   
  },
  bottomSignUp:{
    alignSelf: 'center', 
    marginTop:20   
  },
 
})
