import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class TaskListItem extends Component {
  render() {
    return (
        <View style={styles.root}>

          <View style={styles.priorityIndicator}/>

          <View style={styles.taskDataContainer}>

            <View>
              <Text elipsis={'end'} style={styles.taskTitleText}> Task Title </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text elipsis={'end'} style={styles.taskDescText}> Task Details </Text>
            </View>

            <View style={styles.labelContainer}>
              <View style={styles.labelColor}/>
              <Text elipsis={'end'}> Personal </Text>
            </View>

          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 100,
    width: '100%',
    flexDirection: 'row'
  },
  priorityIndicator: {
    height: '100%',
    width: '4%',
    backgroundColor: 'red',
    marginEnd: 16
  },
  taskDataContainer: {
    marginTop: 18,
    height: 50,
    width: '80%'
  },
  taskTitleText: {
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'capitalize'
  },
  taskDescText: {
    color: '#555',
    fontWeight: '100',
    fontSize: 18,
    textTransform: 'capitalize'
  },
  labelContainer: {
    marginStart: '70%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 8
  },
  labelColor: {
    borderRadius: 50,
    backgroundColor: 'red',
    height: 15,
    width: 15,
    alignSelf: 'center'
  }
});

export default TaskListItem;