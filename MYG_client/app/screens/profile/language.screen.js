import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const LanguageScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Language</Title>
          </Body>
        </Header>

        <Content >
          <Text>Language Setting Screen</Text>
        </Content> 
        
      </Container>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  
});