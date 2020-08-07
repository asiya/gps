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
        <FormInput
          name='email'
          value={email}
          placeholder='Enter email'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='password'
          value={password}
          placeholder='Enter password'
          secureTextEntry
          onChangeText={this.handlePasswordChange}
          iconName='ios-lock'
          iconColor='#2C384A'
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType='outline'
            onPress={this.handleOnLogin}
            title='LOGIN'
            buttonColor='#039BE5'
          />
        </View>
        <Button
          title="Don't have an account? Sign Up"
          onPress={this.goToSignup}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
         </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  }
})
