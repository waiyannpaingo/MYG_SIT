import React from 'react';
import { Image, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Body, Text,Thumbnail, Button, Left, Right, Icon, Title} from 'native-base';
//import { useAuth } from '../../auth/auth.service';

const ManageScreen = ({navigation}) => {

  //const { detail } = useAuth();

  return (
    
    <Container>
        <Header span style={{backgroundColor:'seagreen'}}>
          <Left >
            <Title style={styles.headertxt}>Welcome</Title>
            <Text style={styles.headertxt}>Wai Yan</Text>
          </Left>
        </Header>

        <Content padder >
          <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-around'}}>
            <View style={{width: 175, height: 200 }} >
              { CardComp("Sale Summary", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
            <View style={{width: 175, height: 200}} >
              { CardComp("Orders", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-around'}}>
            <View style={{width: 175, height: 200 }} >
              { CardComp("Sale By Item", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
            <View style={{width: 175, height: 200}} >
              { CardComp("Sale By Category", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-around'}}>
            <View style={{width: 175, height: 200 }} >
              { CardComp("Customers", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
            <View style={{width: 175, height: 200}} >
              { CardComp("Stock Details", "../../res/img/manage_icon.png", 'Sale', navigation) }
            </View>
          </View>

        </Content> 
        
      </Container>
  );
};


function CardComp(text, img_dir, nav, navObj){
  return(
    <Card style= {styles.card}>
    <CardItem  button onPress={() => navObj.navigate(nav)} style= {{borderRadius: 20}}>
      <Body style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../res/img/manage_icon.png')} style={styles.logo}/>
        <Text>{ text }</Text>
      </Body>
    </CardItem>
  </Card>
  );
}


export default ManageScreen;

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  container:  {
      flex: .5,
      flexDirection:'row',
      justifyContent: 'flex-start',
      borderBottomWidth:1,
      borderBottomColor:'#000'
  },
  headertxt: {
    color: 'white',
    backgroundColor:'seagreen',
    margin:10,
    fontSize:25
  },
  logo: {
    width: 125,
    height: 125,
  },
  card: {
    elevation: 3,
    borderColor: 'white',
    borderRadius: 20,
    shadowOffset: { width: 0, height:0 },
    shadowOpacity: .3,
    shadowRadius: 5
  },
  container2:{
    flex:.5,
    flexDirection:'row',
    alignItems:'flex-start'
  },
  box1:{
    backgroundColor:'#2196F3'
  },
  box2:{
    backgroundColor:'#8BC34A'
  },
  box3:{
    backgroundColor:'#e3aa1a'
  },
  
});