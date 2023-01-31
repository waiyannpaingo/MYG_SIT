import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class NotificationScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Notification Screen" />
    </View>
    )
  }
}