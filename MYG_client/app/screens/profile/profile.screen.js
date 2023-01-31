import React from 'react';
import { StyleSheet,Image} from 'react-native';
import { Container, Header, Content,Input, Item, Grid,Col,Card,
    Button, Text,Left,Title,Right,Icon,CardItem } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../auth/auth.service'

const ProfileScreen = ({navigation}) => {

    const {logout} = React.useContext(AuthContext);

        return(
            <Container>
                <Header style={{backgroundColor:'seagreen'}}>
                <Left >
                    <Title style={styles.headertxt}>Profiles</Title>   
                </Left>
                </Header>
                <Content >
                    <Grid>
                        <Col style={styles.container}>
                            <Image source={require('../../res/img/manage_icon.png')} />
                            <Text style={styles.shopname}>Shop Name</Text>
                            <Text >User Name</Text> 

                            <Card style={styles.box}>
                                <CardItem style={styles.icon}>
                                    <Item regular style={{width:320,height:50,marginLeft:40,marginTop:-100}}>
                                        <Icon active name='logo-apple'/>
                                        <Text style={{marginLeft:10}}>Phone Number</Text>
                                    </Item>
                                    <Item regular style={{width:320,height:50,marginLeft:40,marginTop:20}} >
                                        <Icon active name='alarm' />
                                        <Text style={{marginLeft:10}} >Next Billing Date</Text>
                                    </Item>

                                    <Item regular style={{width:320,height:50,marginLeft:40,marginTop:20}}>
                                        <Icon active name='logo-apple' />
                                        <Text style={{marginLeft:10}}>Languages</Text>
                                    </Item>
                                </CardItem>
                            </Card>

                            {/*<Card style={styles.box}>
                                <CardItem style={styles.icon}>
                                    <Item regular style={{width:"100%",height:50,marginLeft:40,paddingTop:10}}>
                                        <Icon active name='logo-apple'/>
                                        <Text style={{marginLeft:10}}>Phone Number</Text>
                                    </Item>

                                    <Item regular style={{width:"100%",height:50,marginLeft:40,paddingTop:10,marginTop:20}} >
                                        <Icon active name='alarm' />
                                        <Text style={{marginLeft:10}} >Next Billing Date</Text>
                                    </Item>

                                    <Item regular style={{width:"100%",height:50,marginLeft:40,paddingTop:10,marginTop:20}}>
                                        <Icon active name='logo-apple' />
                                        <Text style={{marginLeft:10}}>Languages</Text>
                                    </Item>
                                </CardItem>
                            </Card>*/}
                        </Col>
                    </Grid> 

                    <Grid style={styles.settings}>
                        <Item disabled style={{height:50}}>
                        <Icon active name='settings'/>
                        <Text style={{marginLeft:10}}
                        onPress={()=> navigation.navigate('Settings')}>Settings</Text>
                        </Item>
                        <Item disabled style={{height:50,marginTop:10}}>
                        <Icon active name='settings' /> 
                        <Text style={{marginLeft:10}}
                        onPress={()=> logout()}>Logout</Text>  
                        </Item>
                    </Grid>
                </Content>
            </Container>

            
        );
    }

export default ProfileScreen;

const styles = StyleSheet.create({
    wrapper:{
      flex:1
    },
    container:  {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',    
    },
    headertxt: {
      color: 'white',
      backgroundColor:'seagreen',
      margin:10,
      fontSize:25,
      justifyContent:'center'
    },
    shopname:{
       fontSize:30,
       fontWeight:'bold',

    },
    box:{
        backgroundColor:'grey',
        width:350,
        height:250,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
    icon:{
        marginLeft:-30,
        margin:20,
        width:350,
        height:10,
        flexDirection:'column',
        backgroundColor:'grey',
    },
    settings:{
        flexDirection:'column',
        marginTop:80,
        width:400,
        height:20,
    },
    
});