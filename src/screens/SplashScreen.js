import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'

class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.showSplash();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };

  showSplash() {
    setTimeout(()=>{
      this._bootstrapAsync()
    }, 1000);
  }

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.tasko}>{APP_NAME}</Text>
          <ActivityIndicator size="large" color={primary_light} />
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tasko: {
    fontFamily: 'noteworthy',
    fontSize: 50,
    paddingBottom: 35,
    color: primary
  },
  loding: {
  }
});

export default SplashScreen;

