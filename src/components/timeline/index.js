import React from 'react';
import Timeline from 'react-native-timeline-flatlist';


const SWTimeline = ({ data }) => {
    return (
        <Timeline 
          data={data}
          separator={true}
          circleColor='#11B22B'
          lineColor='#11B22B'
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:10, paddingLeft:10, paddingRight: 10}
          }}
          timeStyle={{
               textAlign: 'center', 
               backgroundColor:'#ff9797', 
               color:'white', 
               padding:5, 
               borderRadius:13
          }}
        />
    )
}

export default SWTimeline;