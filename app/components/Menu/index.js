import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { createAppContainer , createDrawerNavigator } from 'react-navigation';
import { DataTable } from 'react-native-paper';



export default class Menu extends Component {

  constructor(){

    super()

    state = { 
      menu:""
    
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


    fetch('http://food.application.pk/retrievemenu',data).then(res => res.json()).then(
      (result) => {

        global.load=true

        this.setState({

          menu: result

        })

      })



  }

  render() {

    if(!global.load){
      return null
    }

    
    
    return (
      <ScrollView>
      {this.state.menu.map((menu) => {
            return ( 
              <DataTable>

              <DataTable.Header style={styles.head}>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>-</DataTable.Title>
                <DataTable.Title numeric>Price</DataTable.Title>
              </DataTable.Header>                
          
              <DataTable.Row>
                <DataTable.Cell>{menu.name}</DataTable.Cell>
                <DataTable.Cell numeric>-</DataTable.Cell>
                <DataTable.Cell numeric>{menu.price}</DataTable.Cell>
              </DataTable.Row>
      
             
            </DataTable>
            )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  head:{
    

  }
  
 
});
