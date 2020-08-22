import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import commonStyles from '../assets/css/common'


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
    fetch('http://localhost:3000/api/startups/users', {
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
        <ScrollView>
        <SafeAreaView style={commonStyles.container}>
          <Text style={commonStyles.gpsHeaderText}>Register as Startup</Text>
          <FormInput
            name='name'
            value={name}
            placeholder='Enter Name'
            autoCapitalize='none'
            onChangeText={this.handleNameChange}
          />
          <FormInput
            name='email'
            value={email}
            placeholder='Email'            
            onChangeText={this.handleEmailChange}
          />
          <FormInput
            name='password'
            value={password}
            placeholder='Password'
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
          <FormInput
            name='phno'
            value={phno}
            placeholder='Contact Number'
            onChangeText={this.handlePhnoChange}
          />
          <FormInput
            name='org'
            value={org}
            placeholder='Organization'
            onChangeText={this.handleOrgChange}
          />
          <FormInput
            name='size'
            value={size}
            placeholder='Size of Organization'
            onChangeText={this.handleSizeChange}
          />
        <FormButton title='Register' onPress={this.goToLogin} />   
        <FormButton title='Already have an account? Sign In' onPress={this.goToLogin} />
      </SafeAreaView>     
      </ScrollView>   
      )
    }
  }

  const styles = StyleSheet.create({
    
   
   
  })