import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownPicker = () => {
  const [selectedValue, setSelectedValue] = useState("S");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Size:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="S" value="S" />
          <Picker.Item label="M" value="M" />
          <Picker.Item label="L" value="L" />
          <Picker.Item label="XL" value="XL" />
          <Picker.Item label='XLL' value="XLL"/>
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
