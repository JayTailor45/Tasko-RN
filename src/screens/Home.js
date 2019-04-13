import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, AsyncStorage, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'
import ActionButton from 'react-native-circular-action-menu';
import Icon from "react-native-vector-icons/FontAwesome";
import TaskListItem from '../components/TaskListItem'

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

          <TaskListItem/>

          <View style={styles.fabContainer}>
            <ActionButton buttonColor="black">
              <ActionButton.Item
                  buttonColor={primary}
                  title="New Task"
                  onPress={() => {}
                  }>
                <Icon name="sticky-note" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                  buttonColor={primary}
                  title="New Note"
                  onPress={
                    () => this.props.navigation.navigate('x')
                  }>
                <Icon name="check" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>

          </View>
        </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  fabContainer:{
    flex:1,
    width:100,
    marginBottom:10
  }
});