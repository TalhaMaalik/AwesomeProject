import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, Alert,AsyncStorage } from 'react-native';
import {Avatar} from 'react-native-paper'
import { Provider as PaperProvider, List, Menu, Divider,Button} from 'react-native-paper';

export default class Sidebar extends Component {



  deletetoken = async () => {

    try {
           await AsyncStorage.removeItem('token');
        
    } catch (error) {
        console.log("error");
    }

  }

    logout(){

        Alert.alert(
            'Confirmation',
            'Are you sure you want to log out?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'OK', onPress: () => {


                this.deletetoken()
                this.props.navigation.navigate('login')
            
            }},
            ],
            {cancelable: false},
          );
          
      }
      
    render() {
      return (
        <PaperProvider>


            <View style = {styles.titleView}>
            <Text style={styles.titleText}>
                Foodizza
             </Text>
             <Text style={styles.lineStyle}>─────────────────</Text>
            </View>

            <View style = {styles.imageView}>
                <Avatar.Icon size={80} theme = {defaulttheme} icon="account-circle" />
            </View>

            <View style = {styles.infoView}>
                <Text style = {styles.text}>{global.cust_name}</Text>
                <Text style = {styles.text}>{global.email}</Text>
            </View>

            <View style = {styles.menuView}>

                <List.Item 
                    title = "Home"
                    description="Go Back To Dashboard"
                    onPress = {() => this.props.navigation.navigate('dashboard')}
                    left={() => <List.Icon  color='#ff2e44' icon="home" />}
                />
                <List.Item 
                    title = "My Orders"
                    description="View Your Recent Orders Information"
                    onPress = {() => this.props.navigation.navigate('myorders')}
                    left={() => <List.Icon  color='#ff2e44' icon="local-dining" />}
                />
                <List.Item 
                    title="Log Out"
                    description="Sign Out From The App"
                    onPress={() => this.logout()}
                    left={() => <List.Icon  color='#ff2e44'  icon="power-settings-new" />}
                />
            </View>

        </PaperProvider>
        
      );
    }
  }

  const styles = StyleSheet.create({
  
    titleView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    infoView: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    },

    menuView: {
        flex: 4,
    },

      titleText: {
        color: 'red',
        fontSize: 35,
        fontFamily: 'Montserrat-Light'
      },

    lineStyle:{
        marginTop:10,
    },

    text: {
        fontFamily: 'Montserrat-Bold',
        //color: 'white',
        marginTop:5,
        fontSize: 15
      },
  });

  const defaulttheme = {
    roundness: 2,
    colors: {
      primary: '#ff2e44',
    }
  };
