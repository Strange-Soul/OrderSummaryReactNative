import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownPicker = () => {
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Qty:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label='5' value="5"/>
          <Picker.Item label='10' value="10"/>
          <Picker.Item label='15' value="15"/>
          <Picker.Item label='20' value="20"/>
        </Picker>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F2F3F3',
    width:"auto",
    height:"auto",
    overflow:"hidden"

  },
  label: {
    fontSize: 15,
  },
  pickerContainer: {
    width:"100%",
  },
  picker: {
    height: 50,
    width: 'auto',
  },

});

export default DropdownPicker;
