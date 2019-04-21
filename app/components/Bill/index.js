import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import { createAppContainer , createDrawerNavigator } from 'react-navigation';
import { DataTable, Provider as PaperProvider, Appbar, Title, Button,Divider } from 'react-native-paper';
import { isEmptyStatement } from '@babel/types';







export default class Bill extends Component {

  constructor(){

    super()
    

    state={

        total: 0

    }
   
  }

  componentWillMount(){


   
    this.calculateOrder()

  }


  calculateOrder(){
    
     global.arr = this.props.navigation.state.params.Order

    let sum=0

    global.arr.map(i => {

        sum=sum+i.price

    })

    this.setState({

        total: sum
        
    })


  }

  removeitem(x){

    Alert.alert(
        'Deletion',
        'Do you want to remove this item from your cart?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {
              
            global.arr.splice(x,1)
            this.calculateOrder()
        
        }},
        ],
        {cancelable: false},
      );
      
  }

  place(){

    if(global.arr.length==0){

        Alert.alert('Error', "Your cart is empty!", [{text: 'Okay'}])

    }else{


        console.log(global.arr)
        console.log(global.token)
        console.log(this.state.total)


    }

  }


  render() {




    return (

        <PaperProvider>
        <Appbar.Header theme = {defaulttheme}>
          <Appbar.Content title="Billing"/>
        
        </Appbar.Header>
        

          <View style={styles.tables}>

          <DataTable  >

            <DataTable.Header>
              <DataTable.Title><Text style = {styles.text} >Name</Text></DataTable.Title>
              <DataTable.Title numeric>-</DataTable.Title>
              <DataTable.Title numeric><Text style = {styles.text} >Price</Text></DataTable.Title>
            </DataTable.Header> 
          <ScrollView>


          {global.arr.map((menu,i) => {
            return ( 
              <DataTable.Row onPress={() => this.removeitem(i)} >
                
                <DataTable.Cell >{menu.name}</DataTable.Cell>
                <DataTable.Cell numeric>-</DataTable.Cell>
                <DataTable.Cell numeric>{menu.price}</DataTable.Cell>
              </DataTable.Row>
    
            )
        })}
        
        <DataTable.Row >
                
                <DataTable.Cell ></DataTable.Cell>
                <DataTable.Cell numeric></DataTable.Cell>
                <DataTable.Cell numeric></DataTable.Cell>
        </DataTable.Row>
        <Divider />
        <Divider />
        <DataTable.Row >
                
                <DataTable.Cell >Total</DataTable.Cell>
                <DataTable.Cell numeric>-</DataTable.Cell>
                <DataTable.Cell numeric>{this.state.total}</DataTable.Cell>
        </DataTable.Row>

        </ScrollView>
        </DataTable>
        </View>


        <View style = {styles.buttonView}><Button style= {styles.button}mode="contained" onPress={() => this.place()}>Place Order</Button></View>
    


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
