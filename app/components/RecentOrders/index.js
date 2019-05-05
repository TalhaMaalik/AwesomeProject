import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Appbar , Provider as PaperProvider , DataTable, Button, Dialog, Portal} from 'react-native-paper';
//import Dialog from "react-native-dialog";
import StarRating from 'react-native-star-rating';



export default class RecentOrders extends Component {

    constructor(props){
        super(props)
        this.state = { 
          dialogVisible: false,
          starCount: 3.5
        }
    }

    showDialog () {
        this.setState({ dialogVisible: true });
    };
     
      handleCancel () {
        this.setState({ dialogVisible: false });
      };


      give_rating() {
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
              id: global.orderid,
              rating: this.state.starCount
    
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }

        fetch('http://food.application.pk/receiverating',data).then(res => res.json()).then(
        (result) => {

          if(result.Success){
          

            Alert.alert('Success', result.Success, [{text: 'Okay'}])

          }
            else{
            Alert.alert('Error', "Error submitting feedback", [{text: 'Okay'}])     

            }
        })
      }

      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
       
      }

      renderElement () {
     
            return  <View style = {styles.buttonView}>
                        <Button style= {styles.button}mode="contained" onPress={() => this.showDialog()}>Give Feedback</Button>
                  </View>
            
    }

   

    render() {

        return (
            <PaperProvider>
                <Appbar.Header theme = {defaulttheme}>
                <Appbar.Content 
                    title="Items Ordered"
                />
                </Appbar.Header>

                <View style={styles.tables}>

          <DataTable>

            <DataTable.Header>
              <DataTable.Title><Text style = {styles.text} >Item Name</Text></DataTable.Title>
              <DataTable.Title numeric>-</DataTable.Title>
              <DataTable.Title numeric><Text style = {styles.text} >Price</Text></DataTable.Title>
            </DataTable.Header> 

          <ScrollView>

          {global.orderslist.map((items,i) => {
            return ( 
              <DataTable.Row key={i+1}>
                <DataTable.Cell key={i+2}>{items.name}</DataTable.Cell>
                <DataTable.Cell numeric key={i+3}>-</DataTable.Cell>
                <DataTable.Cell numeric key={i+4}>{items.price}</DataTable.Cell>
              </DataTable.Row>

            )
        })}

        </ScrollView>
        </DataTable>
        </View>

        {this.renderElement()}
        <Portal>
        <Dialog theme = {defaulttheme} visible={this.state.dialogVisible} 
                       onDismiss={() => this.handleCancel()}>
                      <Dialog.Title >Rate Order</Dialog.Title>
                      <Dialog.Content>
                      <View style = {styles.ratingView}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        halfStarEnabled = {true}
                        halfStarColor = {'#ff2e44'}
                        rating={this.state.starCount}
                        fullStarColor={'#ff2e44'}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                       />
                      </View>
                      </Dialog.Content>
                      
                      <Dialog.Actions>
                      <Button  onPress={() => this.handleCancel()}>Cancel</Button>
                      <Button onPress={() => this.give_rating()}>Give Rating</Button>
                      </Dialog.Actions>
                      
        </Dialog>
        </Portal>
            </PaperProvider>
        )
    }

    
}

const defaulttheme = {
    roundness: 2,
    colors: {
      primary: '#ff2e44',
      text: 'black'
    }
  };
  
  const styles = StyleSheet.create({
  
    buttonView: {
      
      justifyContent: 'flex-end',
      marginBottom: 10,
      alignItems: 'center',
      flex:1
    },

    ratingView: {
        marginTop: 5,
        marginBottom: 5
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
      fontSize: 15
    },
  
    tables : {
      flex:4
  
    }
  });
  