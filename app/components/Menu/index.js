import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, Image, TextInput, TouchableOpacity,ToastAndroid } from 'react-native';
import { createAppContainer , createDrawerNavigator } from 'react-navigation';
import { DataTable, Provider as PaperProvider, Appbar, Title, Button} from 'react-native-paper';


export default class Menu extends Component {

  constructor(){
    super()
    state = { 
      menu:"",
      order: "",
    }
  }

  componentWillMount(){

    global.load=false
    this.loadmenu()
  }


  loadmenu(){

    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        rest: this.props.navigation.state.params.id
       
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    global.fullorder=[]

    fetch('http://food.application.pk/retrievemenu',data).then(res => res.json()).then(
      (result) => {

        global.load=true

        this.setState({

          menu: result,
          order: 0

        })

      })
  }


  renderElement () {
    if(this.state.order == 0){
        return   <View style = {styles.buttonView}><Button style= {styles.button} disabled mode="contained" >Add item</Button></View>;
    }
    else{
        return   <View style = {styles.buttonView}><Button style= {styles.button}mode="contained" onPress={() => this.Billing()}>Proceed to Checkout</Button></View>;
    }
}


  OrderMenu(x){


    this.setState(prevState => ({ order: prevState.order + 1 }));

    global.fullorder.push(x)

    ToastAndroid.show('Item Added!', ToastAndroid.SHORT);


  }

  Billing(){

    this.props.navigation.navigate('Bill', { Order: global.fullorder})

  }

  render() {

    if(!global.load){
      return null
    }

    return (

      <PaperProvider>
          <Appbar.Header theme = {defaulttheme}>
            <Appbar.Content 
              title="Menu"
            />
            
          </Appbar.Header>

          <View style={styles.tables}>

          <DataTable  >

            <DataTable.Header>
              <DataTable.Title><Text style = {styles.text} >Name</Text></DataTable.Title>
              <DataTable.Title numeric>-</DataTable.Title>
              <DataTable.Title numeric><Text style = {styles.text} >Price</Text></DataTable.Title>
            </DataTable.Header> 
          <ScrollView>

      {this.state.menu.map((menu) => {
            return ( 
              <DataTable.Row onPress={() =>this.OrderMenu(menu)}>
                
                <DataTable.Cell >{menu.name}</DataTable.Cell>
                <DataTable.Cell numeric>-</DataTable.Cell>
                <DataTable.Cell numeric>{menu.price}</DataTable.Cell>
              </DataTable.Row>
            )
        })}

        </ScrollView>
        </DataTable>
        </View>

        
       {this.renderElement()}
        
      
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


  buttonView: {
    
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    flex:1
  },

  button: {
      height: 50,
      width: 250,
      marginTop: 10,
      backgroundColor: '#FF6347',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },

  text: {
    fontSize: 15,
    
  },

  tables : {
    flex:4

  }
});
