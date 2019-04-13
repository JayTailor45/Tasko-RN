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
              <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Icon name="sticky-note" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#9b59b6' title="New Note" onPress={() => {}}>
                <Icon name="tasks" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>

          </View>
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