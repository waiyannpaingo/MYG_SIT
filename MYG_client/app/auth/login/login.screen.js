import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Logo_Img from '../../res/img/POS_logo.png';
import {AuthContext} from '../auth.service';

const LoginScreen = ({navigation}) => {
  const {login} = React.useContext(AuthContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo_Img} />
      <Text style={styles.logoText}>Welcome</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          placeholderTextColor="grey"
          onChangeText={(phoneNumber) => setPhone(phoneNumber)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* row */}
      <View style={styles.row}>
        {/* column */}
        <View style={styles.colRight}>
          <CheckBox
            style={styles.checkBox}
            disabled={false}
            value={toggleCheckBox}
            boxType="square"
            tintColor="#304B9A"
            onTintColor="#304B9A"
            onCheckColor="#304B9A"
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.checkBoxText}>Remember Me</Text>
        </View>

        {/* column */}
        <View style={styles.colRight}>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          login();
        }}>
        <Text style={styles.buttonTextStyle}> log in </Text>
      </TouchableOpacity>

      <View style={styles.rowOR}>
        <View style={styles.geryLine} />
        <Text style={styles.textStyle}>OR</Text>
        <View style={styles.geryLine} />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('register')}>
        <Text style={styles.buttonTextStyle}> register </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
const win = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 230,
    height: 220,
    resizeMode: 'contain',
    marginBottom: -30,
  },
  logoText: {
    color: '#304B9A',
    fontSize: 35,
    marginTop: 25,
    marginBottom: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputView: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#304B9A',
    alignItems: 'flex-start',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 30,
  },
  rowOR: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
  },
  colRight: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  colLeft: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  checkBox: {
    width: 20,
    height: 20,
    marginLeft: 50,
    marginRight: 5,
  },
  checkBoxText: {
    color: 'grey',
  },
  forgot_button: {
    marginLeft: 45,
    color: 'grey',
  },
  buttonStyle: {
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
    backgroundColor: '#5BAF91',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonTextStyle: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    paddingHorizontal: 15,
    fontSize: 20,
    color: 'grey',
  },
  geryLine: {
    borderColor: 'grey',
    opacity: 0.5,
    borderWidth: 0.4,
    flex: 1,
    alignSelf: 'center',
  },
});
