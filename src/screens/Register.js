import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator, AsyncStorage, Alert} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'
import {Input, Button} from 'react-native-elements'

import firebase from 'firebase'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  signUpFire () {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=> {
          this.props.navigation.goBack();
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          Alert.alert('Error',errorMessage);
        });
  }


  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.tasko}>
            {APP_NAME}
          </Text>
          <View style={styles.inputView}>
            <Input
                onChangeText={(text) => (this.setState({email: text}))}
                placeholder='Email'
                errorStyle={{ color: 'red' }}
            />
          </View>
          <View style={styles.inputView}>
            <Input
                onChangeText={(text) => (this.setState({ password: text}))}
                placeholder='Password'
                secureTextEntry={true}
            />
          </View>
          <View style={styles.btns}>
            <Button
                style={styles.btn}
                title="Register"
                onPress={this.signUpFire.bind(this)}
            />
            <Button
                style={styles.btn}
                title="Already have an account?"
                onPress={() =>this.props.navigation.goBack()}
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