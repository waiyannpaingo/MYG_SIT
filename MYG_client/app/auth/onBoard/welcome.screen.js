import React from 'react';
import {
  Image,
  Button,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Logo_Img from '../../res/img/POS_logo.png';
import {AuthContext} from '../auth.service';

const WelcomeScreen = ({navigation}) => {
  const {navigate} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo_Img} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.logoText}>Welcome</Text>
        <Text style={styles.quoteText}>
          &quot;Manage your business {'\n'} at your fingertips.&quot;
        </Text>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.TextStyle}> Get Started! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5BAF91',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 50,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  logoText: {
    color: '#fff',
    fontSize: 35,
    marginTop: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  quoteText: {
    color: '#fff',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '400',
    textAlign: 'center',
  },
  SubmitButtonStyle: {
    marginTop: 70,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#304B9A',
  },

  TextStyle: {
    fontSize: 25,
    color: '#304B9A',
    fontWeight: '400',
    textAlign: 'center',
  },
});
