import { useRef, useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';

import { Container } from './styles';

export const CenterChart = ({ radius }) => {
    
    const [value, setValue] = useState(5);
    const [firstColor, setFirstColor] = useState();
    const [secondColor, setSecondColor] = useState();
    
    //montar o esquema de cores ainda
    useEffect(() => {
        if(value > 50) {
            setFirstColor("#005321")
            setSecondColor("#fff000")
        }else {
            setFirstColor("#f555f2")
            setSecondColor("#ff2300")
        }
    }, [])

    return(
        <Container> 
            <CircularProgress
                radius={radius}
                value={value}
                activeStrokeColor={firstColor}
                activeStrokeSecondaryColor={secondColor}
                progressValueColor='#303030'
                fontSize={20}
                inActiveStrokeWidth={5}
                inActiveStrokeOpacity={0.2}
                duration={1000}
            />
        </Container>
    )
}