import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { createAppContainer , createDrawerNavigator } from 'react-navigation';
import { DataTable, Provider as PaperProvider, Appbar, Title, Button } from 'react-native-paper';



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

      <PaperProvider>
          <Appbar.Header theme = {defaulttheme}>
            <Appbar.Content 
              title="Menu"
            />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>

      
      {this.state.menu.map((menu) => {
            return ( 
              <DataTable style={styles.table} >

              <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>-</DataTable.Title>
                <DataTable.Title numeric>Price</DataTable.Title>
              </DataTable.Header>                
          
              
              <DataTable.Row >
                <DataTable.Cell>{menu.name}</DataTable.Cell>
                <DataTable.Cell numeric>-</DataTable.Cell>
                <DataTable.Cell numeric>{menu.price}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={1}
                numberOfPages={5}
                onPageChange={(page) => { console.log(page); }}
                label="1-2 of 6"
              />
      
            </DataTable>
            )
        })}

       <View style = {styles.buttonView}>
       <Button style= {styles.button} mode="contained" onPress={() => console.log('Pressed')}>
          ORDER NOW
        </Button>
       </View>
        
      
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
    
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
      height: 50,
      width: 250,
      marginTop: 10,
      backgroundColor: '#FF6347',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  }
});
