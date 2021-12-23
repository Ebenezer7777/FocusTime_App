import React from "react";
import { TouchableOpacity, Text , StyleSheet} from "react-native";
import {fontSizes,paddingSizes } from "../utils/sizes";

export const RoundedButton = ({

  style = {},
  textStyle = {},
  size = 125,

  ...props

}) => {
  return  (
    <TouchableOpacity style ={[styles(size)
    .raduis, style
    ]}>
    <Text style= {[styles(size).text, textStyle]}>
    {props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) =>
StyleSheet.create ({
  raduis:{
    borderRadius: size/2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: 'center',
    borderColor: "#fff",
    borderWidth: 3
    
  },
  text: {color: '#fff' , fontSize: size/3},
});
