import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'
import {Input, Button} from 'react-native-elements'
import {AsyncStorage} from "react-native";

class Login extends Component {

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('AppStack');
  };

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.tasko}>
            Tasko
          </Text>
          <View style={styles.inputView}>
            <Input
                placeholder='Your email'
                errorStyle={{ color: 'red' }}
                errorMessage='Enter valid email'
            />
          </View>
          <View style={styles.inputView}>
          <Input
              placeholder='Your password'
              secureTextEntry={true}
          />
          </View>
          <View style={styles.btns}>
            <Button
                title="Sign in!"
                style={styles.btn}
                onPress={this._signInAsync}
            />
            <Button
                style={styles.btn}
                title="Don't have an account?"
            />
          </View>
        </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary
  },
  inputView: {
    flexDirection: 'row',
    marginStart: 8,
    marginEnd: 8,
    marginTop: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  btns: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly'
    width: '95%'
  },
  btn: {
    marginTop: 16
  },
  tasko: {
    fontFamily: 'noteworthy',
    fontSize: 50,
    paddingBottom: 55,
    color: '#fff'
  },
});