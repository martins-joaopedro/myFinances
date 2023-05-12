import { useRef, useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';

export const CenterChart = () => {
    
    const [value, setValue] = useState(45);
    let first, second;
    
    if(value > 50) {
        first = "#f0f"
        second = "#f00f"
    } else {
        first = "#ff5454"
        second = "#fff000"
    }

    return(
        <View style={{flex: 1, alignSelf: 'center', justifyContent: "center"}}>   
            <CircularProgress
                radius={100}
                value={value}
                activeStrokeColor={first}
                activeStrokeSecondaryColor={second}
                progressValueColor='#303030'
                fontSize={20}
                inActiveStrokeWidth={5}
                inActiveStrokeOpacity={0.2}
                duration={1000}
            />
        </View>
    )
}