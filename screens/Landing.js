import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import RadioButton  from "../components/RadioButton"


export default class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      radioItems:
        [
          {
            label: 'Startup',
            size: 30,
            color: '#d63447',
            selected: true
          },

          {
            label: 'Client',
            color: '#d63447',
            size: 30,
            selected: false,
          },
        ], selectedItem: ''
      }
  }
 
  componentDidMount() {
    this.state.radioItems.map((item) => {
      if (item.selected == true) {
        this.setState({ selectedItem: item.label });
      }
    });
  }

  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }
  
  handleOnSelection = () => {
      this.props.navigation.navigate('Login',{selectedUser:this.state.selectedItem})
  }
 
  render() {
    
    return (       
      <SafeAreaView style={styles.container}>
             
           <Text style={styles.radioText}>Sign In as</Text> 
                    
        <View style={styles.radioContainer} >           
          {
            this.state.radioItems.map((item, key) =>
              (
                <RadioButton style={styles.radioBtn} key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
              ))
          }

            
          </View>
          <TouchableOpacity
                style={styles.nextBtn}
                onPress={this.handleOnSelection}
                >
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity> 
              
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

  radioContainer:{ 
    backgroundColor:"#f6eedf",
    alignSelf:"flex-end",
    padding:40,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20
  },

  radioBtn:{
      marginLeft:0
  },

  nextBtn:{
    marginTop:20,
    backgroundColor: '#d63447',    
    paddingLeft:80,
    paddingRight:80,
    paddingTop:20,
    paddingBottom:20,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    alignSelf:"flex-end",
  },

  nextText:{
    color:"#ffffff",
    fontSize:20
  },

  gps: {
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10,
    fontSize:20,    
    color:"#d63447",
    fontWeight:"600",
    
  },

  radioText:{
    alignSelf: 'center',
    marginTop:10,
    marginBottom:20,
    fontSize:20,    
    color:"#d63447",
    fontWeight:"600",
    fontSize:30
  },
  
  selectedTextHolder: {
   
  },
  selectedText: {
    fontSize: 18,
    color: 'white'
  }
})
