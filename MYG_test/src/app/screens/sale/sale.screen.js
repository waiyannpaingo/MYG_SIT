import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class SaleScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sale Screen" />
    </View>
    )
  }
}