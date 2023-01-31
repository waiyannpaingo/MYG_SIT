import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const AccountSettingScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Account Settings</Title>
          </Body>
        </Header>

        <Content >
          <Text>Account Setting Screen</Text>
        </Content> 
        
      </Container>
  );
};

export default AccountSettingScreen;

const styles = StyleSheet.create({
  
});