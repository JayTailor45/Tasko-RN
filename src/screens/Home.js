import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, AsyncStorage, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'

class Home extends Component {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthStack');
  };

  render() {
    return(
        <View style={styles.container}>
          <Text>
            Home called
          </Text>
          <Button
              title="I'm done, sign me out"
              onPress={this._signOutAsync}
          />
        </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});