

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar , Provider as PaperProvider , Card, Paragraph, Title, Button, Avatar} from 'react-native-paper';
import {AsyncStorage} from 'react-native';


export default class Dashboard extends Component {

  state = { 
    token:"",
    lat: "",
    lon :"",
    rest: [],
    cust: "",
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount () {
    
    
   this._loadInitialState()
   navigator.geolocation.getCurrentPosition(this._sucesslocation,(error) => alert(JSON.stringify(error)))

  }

  _sucesslocation= (position) =>{
     global.lat= parseFloat(position.coords.latitude);
     global.lon= parseFloat(position.coords.longitude)

     this.renderPage();

  }

  _loadInitialState = async () => {

    try {
        var value = await AsyncStorage.getItem('token')
        if (value != null) {
            global.token=value;
        }
        this.renderPage();
    } catch (error) {
        console.log("error");
    }

  }

  loadrestaurants(){

    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        lat: global.lat,
        lon: global.lon,
        token: global.token
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }


    fetch('http://food.application.pk/retrieve',data).then(res => res.json()).then(
      (result) => {

        this.setState({
          rest: result['rest'],
          cust: result['user']
        })
        global.cust_name = this.state.cust[0].name
        global.email = this.state.cust[0].email
      })
      
      
      
    }
    
    renderPage(){
      
      if(global.lat && global.token){
        this.loadrestaurants();
      }
    }


    openpage(id){
      this.props.navigation.navigate('menu', { id: id })
    }
  
  
    render() {

      if(!global.lat || !global.token) {
        return null;
      }
      return (
        <PaperProvider>
          <Appbar.Header theme = {defaulttheme}>
            <Appbar.Content 
              title="Restaurants Near You"
            />
           
          </Appbar.Header>

        <ScrollView>
        {this.state.rest.map((rest) => {
              return ( 
              <Card onPress={_ => this.openpage(rest.id)}  theme = {defaulttheme}>

                <Card.Content style = {styles.card}>
                  <View style = {styles.cardtitleview}>
                  <Title style = {styles.cardtitle}>{rest.name}</Title>
                  </View>
    
                  <View style = {styles.cardparagraphview}>
                    <Paragraph style = {styles.text}>{rest.address}</Paragraph>
                  </View>
    
                  <View style = {styles.cardbottomview}>
                    <Text style = {styles.text}>Delivery Time: {rest.deliverytime} Min</Text>
                    <Text style = {styles.text}>Phone: {rest.phone}</Text>
                  </View>
    
                </Card.Content>

             </Card>);
          })}
        </ScrollView>
        
        </PaperProvider>
      );
    }
  }

  const defaulttheme = {
    roundness: 2,
    colors: {
      primary: '#ff2e44',
      text: 'white'
    }
  };

  const styles = StyleSheet.create({
    card: {
      padding: 20,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: '#FF6347',
      borderRadius: 10
    },

    cardtitleview: {
      flex: 0
    },

    cardparagraphview: {
      marginTop: 20
    },

    cardbottomview: {
      marginTop: 20,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },

    cardtitle: {
      alignSelf: 'center',
      fontSize: 25,
      fontFamily: 'Montserrat-Light'
    },

    text: {
      color: 'white'
    }
  });

  

  