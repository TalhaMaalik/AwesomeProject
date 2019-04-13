
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';



export default class Login extends Component {

    state = { email:"" , password:"" }
    static navigationOptions = {
        header: null
    }
    
    checkLogin() {
        const { email, password } = this.state
        if (email == 'admin' && password == 'admin' ) {
            this.props.navigation.navigate('dashboard')
        }
        else {
            Alert.alert('Error', 'Email or Password is incorrect', [{
                text: 'Okay'
            }])
        }
    }

    render() {
      if (this.state.isLoading) {
        return <SplashScreen />;
      }
    
      return (
        <View style={styles.container}>
          <View style={styles.titleView}>
             <Text style={styles.titleText}>
                Foodizza
             </Text>
          </View>
  
          <View style={styles.inputView}>
              <Text style={styles.text}>Enter Your Email</Text>
                  <TextInput style={styles.inputText} placeholder= "Email"
                    onChangeText={text => this.setState({ email: text})}
                  />
              <Text style={styles.text}>Enter Your Password</Text>
                  <TextInput style={styles.inputText} secureTextEntry={true} placeholder= "Password"
                    onChangeText={text => this.setState({ password: text})}
                  />
          </View>
          
          <View style={styles.buttonView}>
              <TouchableOpacity style={styles.btn} onPress={_ => this.checkLogin()}>
                  <Text>Login</Text>
              </TouchableOpacity>
              
              <Text style={styles.textBottom} onPress={() => this.props.navigation.navigate('register')}>
               {"\n"}
                No Account ? {"\n"}
                Register Here
              </Text>
          </View>
        </View>
      );
    }
  }

 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff2e44',
      padding: 40,
    },
  
    titleView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inputView: {
      flex: 3, 
      top: 0,
      left: 5,
      right: 5
    },
  
    buttonView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    titleText: {
      color: 'white',
      fontSize: 40,
      fontFamily: 'Montserrat-Light'
    },
  
    text: {
      fontFamily: 'Montserrat-Light',
      color: 'white',
      fontSize: 15
    },

    textBottom: {
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
