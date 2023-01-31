import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';
//import { useAuth } from '../../auth/auth.service';

const AddProductScreen = ({navigation}) => {

  //const { detail } = useAuth();

  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Product</Title>
          </Body>
        </Header>

        <Content >
          <Text>Edit Product Screen</Text>
        </Content> 
        
      </Container>
  );
};


export default AddProductScreen;

const styles = StyleSheet.create({
  
});



