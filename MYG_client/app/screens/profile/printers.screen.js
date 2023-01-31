import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const PrintersScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Printers</Title>
          </Body>
        </Header>

        <Content >
        <Button transparent onPress={() => navigation.navigate('AddPrinters')}>
            <Text>Add Printer Function</Text>
          </Button>
        </Content> 
        
      </Container>
  );
};

export default PrintersScreen;

const styles = StyleSheet.create({
  
});