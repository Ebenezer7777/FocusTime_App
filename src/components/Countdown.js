import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { colors } from "../utils/colors";
import { fontSizes,sizes } from "../utils/sizes";


const minutesToMillis = (min) => min*1000*60;
const formatTime = (time) => time<10 ? `0${time}` : time;
export const Countdown = ({
    minutes = 20,
    isPaused
}) => {
    const interval = React.useRef(null);
    const countDown =() =>{
        setMillis((time) =>{
            if(time==0){

                return time;
            }
            const timeLeft = time-1000;
            return timeLeft;
        }
        )
    }
    useEffect(() =>{
        if(isPaused){
            return;
        }
        interval.current = setInterval(countDown,1000);

        return () => clearInterval(interval.current);
    },[])

    const[millis, setMillis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis/1000/60)%60;
    const seconds = Math.floor(millis/1000)%60;

    return (
        <Text style={styles.Text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles =StyleSheet.create({
    Text:{
        fontSize:fontSizes.xxxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding:fontSizes.lg,
        backgroundColor: 'rgba(94,132,226,0.2)'
    }
})