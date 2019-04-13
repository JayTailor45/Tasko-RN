import React, {Component} from 'react'
import {View, Text} from 'react-native'

class TaskListItem extends Component{
  render(){
    return (
        <View style={{ height: 100, width: '100%', flexDirection: 'row'}}>

          <View style={{ height: '100%',width: '4%', backgroundColor: 'red', marginEnd: 16}}/>

          <View style={{ marginTop: 18,height: 50, width: '80%' }}>

            <View>
              <Text elipsis={'end'} style={{ fontWeight: 'bold', fontSize: 22, textTransform: 'capitalize'}}> Task Title </Text>
            </View>

            <View>
              <Text elipsis={'end'} style={{ fontSize: 18, textTransform: 'capitalize'}}> Task Details </Text>
            </View>

            <View style={{marginStart: '70%' , flexDirection: 'row', alignSelf: 'center',marginTop: 8}}>
              <View style={{ borderRadius: 50, backgroundColor: 'red', height: 15, width: 15, alignSelf: 'center' }} />
              <Text elipsis={'end'}> Personal </Text>
            </View>

          </View>

        </View>
    );
  }
}

export default TaskListItem;