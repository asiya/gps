import React from 'react'
import { Button, StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

  
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


  export default class Detail extends React.Component {
    constructor(props) {
      super(props);
     
    }
    state = {
      Loading : true,
      productname: '',
      productdesc: '',
      price:'',
      comments:'',
      address:''
    }
  
    handleProductNameChange = productname => {
      this.setState({ productname })
    }
  
    handleProductdescChange = productdesc => {
      this.setState({ productdesc })
    }
  
    handlePriceChange = price => {
      this.setState({ price })
    }
  
    handleCommentChange = comments => {
      this.setState({ comments })
    }

    handleAddressChange = address => {
      this.setState({ address })
    }
    addProduct = async () => {
      fetch('http://localhost:3000/api/startups/dashboard/additionaldetails', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.route.params.item.token,
        },
        body: JSON.stringify({
          proname: this.state.productname,
          prodesc: this.state.productdesc,
          price: this.state.price,
          comments: this.state.comments,
          address:this.state.address
        })      
      })
      .then(response => response.json())
      .then(responseJson => { console.log("responseJson",responseJson);
        this.setState({data: responseJson, Loading:false});
        this.props.navigation.navigate('Home')})
       
        .catch(error => {
          console.error("there was an error",error);
        })
      
    }    
    render() {
      const { productname, productdesc, price, comments, address } = this.state
  
      return (
        <SafeAreaView style={styles.container}>
          <FormInput
            name='productname'
            value={productname}
            placeholder='Enter product name'
            autoCapitalize='none'
            onChangeText={this.handleProductNameChange}
          />
          <FormInput
            name='productdesc'
            value={productdesc}
            placeholder='Enter product description'
            onChangeText={this.handleProductdescChange}
          />
          <FormInput
            name='price'
            value={price}
            placeholder='Enter price'
            onChangeText={this.handlePriceChange}
          />
          <FormInput
            name='comments'
            value={comments}
            placeholder='Additional Comment'
            onChangeText={this.handleCommentChange}
          />       
            <FormInput
            name='address'
            value={address}
            placeholder='Address'
            onChangeText={this.handleAddressChange}
          />   
          <View style={styles.buttonContainer}>
            <FormButton
              buttonType='outline'
              onPress={this.addProduct}
              title='Add Product'
              buttonColor='#d63447'
            />
          </View>     
      </SafeAreaView>
      )
    }
  }
  