

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Appbar , Provider as PaperProvider , Card, Paragraph, Title, Button, Avatar} from 'react-native-paper';


export default class Dashboard extends Component {

  static navigationOptions = {
    header: null
  }
    render() {
      return (
        <PaperProvider >
          <Appbar.Header theme = {defaulttheme}>
            <Appbar.BackAction
              onPress={this._goBack}
            />
            <Appbar.Content
              title="Title"
              subtitle="Subtitle"
            />
            <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
          </Appbar.Header>

          <Card theme = {defaulttheme}>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
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
  
  //MINHAJ KE LIYE COMMIT