import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const AddCategoryScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Category</Title>
          </Body>
        </Header>

        <Content >
          <Text>Edit Category Screen</Text>
        </Content> 
        
      </Container>
  );
};


export default AddCategoryScreen;

const styles = StyleSheet.create({
  
});