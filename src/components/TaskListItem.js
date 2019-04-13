import React, {Component} from 'react'
import {View, Text} from 'react-native'

class TaskListItem extends Component{
  render(){
    return (
        <View style={{ height: 100, width: '100%',backgroundColor: 'green', flexDirection: 'row'}}>
          <View style={{ height: '100%',width: '4%', backgroundColor: 'red', marginEnd: 16}}>
          </View>
          <View style={{ marginTop: 14, width: '92%' , backgroundColor: 'grey' }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 22, textTransform: 'uppercase'}}> Task Title </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, textTransform: 'lowercase'}}> Task Title </Text>
            </View>
            <View style={{marginStart: '70%' , flexDirection: 'row' }}>
              <View style={{ borderRadius: 50, backgroundColor: 'red', height: 10, width: 10 }} />
              <Text> Personal </Text>
            </View>
          </View>
        </View>
    );
  }
}

export default TaskListItem;