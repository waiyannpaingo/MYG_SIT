import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const AddPrintersScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Add Printer</Title>
          </Body>
        </Header>

        <Content >
          <Text>Add Printer Screen</Text>
        </Content> 
        
      </Container>
  );
};

export default AddPrintersScreen;

const styles = StyleSheet.create({
  
});