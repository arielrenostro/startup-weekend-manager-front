import React from 'react';
import { View, Text } from 'react-native';
import SWTimeline from '../../components/timeline';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


dataFriday = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
]

dataSaturday = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]

dataSunday = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]

const TopTab = createMaterialTopTabNavigator();

const SchedulerTab = (props) => {
    const data = props.route.params.data;

    return (
      <SWTimeline data={data} />
    )
};

const Scheduler = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen 
        name="Sexta" 
        component={SchedulerTab} 
        initialParams={{ data: dataFriday }} 
      />
      
      <TopTab.Screen 
        name="Sábado" 
        component={SchedulerTab} 
        initialParams={{data: dataSaturday }}
      />
    
      <TopTab.Screen 
        name="Domingo" 
        component={SchedulerTab} 
        initialParams={{ data: dataSunday }} 
      />
    </TopTab.Navigator>
  )
}

export default Scheduler;