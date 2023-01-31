import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';

const SettingScreen = ({navigation}) => {


  return (
    
    <Container>
        <Header >
          <Body >
            <Title>Setting</Title>
          </Body>
        </Header>

        <Content >
          <Button transparent onPress={() => navigation.navigate('AccountSettings')}>
            <Text>Go to Account Settings</Text>
          </Button>
          <Button transparent onPress={() => navigation.navigate('Language')}>
            <Text>Go to Language Setting</Text>
          </Button>
          <Button transparent onPress={() => navigation.navigate('Printers')}>
            <Text>Go to Printer Setting</Text>
          </Button>
        </Content> 
        
      </Container>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  
});