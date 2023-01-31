import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {AuthContext} from '../auth.service';
import CheckBox from '@react-native-community/checkbox';
import BackButton from '../../components/BackButton';

const RegisterScreen = ({navigation}) => {
  const {login} = React.useContext(AuthContext);
  const {register} = React.useContext(AuthContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.headerText}>Let's Get Started</Text>
      <Text style={styles.textStyle}>Create your Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Shop Name"
          placeholderTextColor="grey"
          onChangeText={(shopName) => setPhone(shopName)}
        />
      </View>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Re-type Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.row}>
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
        <Text style={styles.checkBoxText}>
          By checking the box {'\n'} you accept our terms and conditions
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => {
          login();
        }}>
        <Text style={styles.buttonTextStyle}> sign up </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.logIn_button}
          onPress={() => navigation.navigate('login')}>
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
    //     <Button
    //     title="Register!"
    //     onPress={() => {register()}}
    // />
    // <Button
    //     title="Go to Login"
    //     onPress={() => navigation.navigate('login')}
    // />
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 30,
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
    fontSize: 20,
    fontWeight: '300',
    color: 'grey',
    marginBottom: 70,
  },
  checkBox: {
    width: 20,
    height: 20,
    marginLeft: 50,
    marginRight: 10,
  },
  checkBoxText: {
    color: 'grey',
  },
  logIn_button: {
    fontSize: 18,
    fontWeight: '300',
    color: '#3073FF',
    position: 'absolute',
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
