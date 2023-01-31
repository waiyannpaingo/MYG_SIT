import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const InventoryScreen = ({navigation}) => {

  //const { detail } = useAuth();

  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Inventory</Title>
          </Body>
        </Header>

        <Content >
        <Button transparent onPress={() => navigation.navigate('Product')}>
            <Text>Add/View Product</Text>
          </Button>
          <Button transparent onPress={() => navigation.navigate('Category')}>
            <Text>Add/View Category</Text>
          </Button>
        </Content> 
        
      </Container>
  );
};


export default InventoryScreen;

const styles = StyleSheet.create({
  
});



