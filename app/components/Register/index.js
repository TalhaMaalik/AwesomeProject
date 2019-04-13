

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Register extends Component {

    state = { name:"" , address:"" , email:"" , password:"" , phone:"" }
    static navigationOptions = {
        header: null
    }

    checkRegisteration() {
        //const { name, address, email, password, phone } = this.state
       /* fetch('http://food.application.pk/registercustomer', 
        {method: 'POST' , 
         body: `name=${name}&address=${address}&email=${email}&pass=${password}&phone=${phone}`
        }).then(res => {
            return res.text()
        })
        .then(res => {
          Alert.alert('Success', res.text(), [{
            text: 'Okay'
          }])
        }) */
    }

    render() {
      return (
        <View style={styles.container}>

          <View style={styles.titleView}>
             <Text style={styles.titleText}>
                Registration
             </Text>
          </View>
  
          <View style={styles.inputView}>
              <Text style={styles.text}>Enter Your Full Name</Text>
                  <TextInput style={styles.inputText} placeholder="Full Name"
                    onChangeText={text => this.setState({ name: text})}
                  />

              <Text style={styles.text}>Enter Your Address</Text>
                  <TextInput style={styles.inputText} placeholder="Address"
                    onChangeText={text => this.setState({ address: text})}
                  />

              <Text style={styles.text}>Enter Your Phone Number</Text>
                  <TextInput style={styles.inputText} placeholder="Phone"
                    onChangeText={text => this.setState({ phone: text})}
                  />

              <Text style={styles.text}>Enter Your Email</Text>
                  <TextInput style={styles.inputText} placeholder="Email"
                    onChangeText={text => this.setState({ email: text})}
                  />
            
              <Text style={styles.text}>Enter Your Password</Text>
                  <TextInput style={styles.inputText} secureTextEntry={true} placeholder="Password"
                    onChangeText={text => this.setState({ password: text})}
                  />
          </View>
          
          <View style={styles.buttonView}>
              <TouchableOpacity style={styles.btn} onPress={_ => this.checkRegisteration()}>
                  <Text>Register</Text>
              </TouchableOpacity>
  
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff2e44',
      padding: 40
    },
  
    titleView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inputView: {
      flex: 9, 
      left: 5,
      right: 5
    },
  
    buttonView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    titleText: {
      color: 'white',
      fontSize: 25,
      fontFamily: 'Montserrat-Light'
    },
  
    text: {
      fontFamily: 'Montserrat-Light',
      color: 'white',
      fontSize: 15
    },
  
    inputText: {
      height: 36,
      padding: 10,
      marginTop: 10,
      marginBottom: 20,
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      backgroundColor: 'white',
    },
  
    btn: {
      height: 50,
      width: 150,
      backgroundColor: 'white',
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#48BBEC',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });