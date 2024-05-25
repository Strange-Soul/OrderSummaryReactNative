import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const TextButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonstyle} onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles=StyleSheet.create(
    {
        buttonstyle:
        {
            color:"#7C7E7E",
            borderColor:"#7C7E7E",
            borderWidth:0.5,
            alignItems:"center",
            alignContent:"center",
            padding:10,
            borderRadius:8,
            top:-18
        }
  ,
        content:
        {
            color:"#7C7E7E",
            fontSize:10
        }
    }
)