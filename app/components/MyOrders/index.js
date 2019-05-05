
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar , Provider as PaperProvider , Card, Paragraph, Title, Button, Avatar} from 'react-native-paper';




export default class MyOrders extends Component {

    static navigationOptions = {
        header: null
      }

      state = { 
        orderInfo: "",
      }

      componentWillMount() {

        global.load=false
        this.loadorders()
      }

      loadorders(){

        let data = {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'same-origin',
          body: JSON.stringify({
            token: global.token
           
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        global.orderlist=[]
    
        fetch('http://food.application.pk/getorder',data).then(res => res.json()).then(
          (result) => {
    
            global.load=true
    
            this.setState({
    
              orderInfo: result,
            })

          })
      }

      openpage(x,y){
        global.orderslist = x
        global.orderid = y
        this.props.navigation.navigate('recentorders')
      }

    render() {

        if(!global.load){
            return null
        }

        return(
            <PaperProvider>
                <Appbar.Header theme = {defaulttheme}>
                    <Appbar.Content 
                    title="My Orders"
                />
                </Appbar.Header>

                <ScrollView>

                {this.state.orderInfo.map((order,i) => {
                    
              return ( 
                
              <Card key={i+1} onPress={_ => this.openpage(order.items,order.orderID)} theme = {defaulttheme}>

                <Card.Content key={i+2} style = {styles.card}>
                  
                  <View key={i+3} style = {styles.cardbottomview}>
                    <Text style = {styles.text} key={i+4}>{order.name}</Text>
                    <Text style = {styles.text} key={i+5}>Total Amount: {order.amount}</Text>
                  </View>
    
                  <View key={i+6} style = {styles.cardbottomview}>
                    <Text style = {styles.text} key={i+7}>Status: {order.status} </Text>
                    <Text style = {styles.text} key={i+8}>{order.date}</Text>
                  </View>
    
                </Card.Content>

             </Card>);
          })}
                </ScrollView>
            </PaperProvider>
    
        )
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
      marginTop: 10,
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
