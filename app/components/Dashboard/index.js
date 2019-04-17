

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Appbar , Provider as PaperProvider , Card, Paragraph, Title, Button, Avatar} from 'react-native-paper';
import { createAppContainer , createDrawerNavigator } from 'react-navigation';


export default class Dashboard extends Component {

  static navigationOptions = {
    header: null
  }
    render() {
      return (
        <PaperProvider>
          <Appbar.Header theme = {defaulttheme}>
            <Appbar.Content
              
            />
            <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>

          <Card style = {styles.card} theme = {defaulttheme}>
           
            <Card.Content>
              <View style = {styles.cardtitleview}>
                <Title style = {styles.cardtitle}>Restaurant Name</Title>
              </View>

              <View style = {styles.cardparagraphview}>
                <Paragraph>Restaurant Address{"\n"}</Paragraph>
              </View>

              <View style = {styles.cardbottomview}>
                <Text >delivery time</Text>
                <Text>minimum delivery</Text>
              </View>

            </Card.Content>
         </Card>
        </PaperProvider>
      );
    }
  }

  const defaulttheme = {
    roundness: 2,
    colors: {
      primary: '#ff2e44',
    }
  };

  const styles = StyleSheet.create({
    card: {
      padding: 20,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10
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
    }
  });
  