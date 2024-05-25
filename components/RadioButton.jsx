import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const RadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      <View style={styles.radioButtonHolder}>
        {selected ? <View style={styles.radioIcon} /> : null}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonHolder: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioIcon: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007bff',
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
});

export default RadioButton;
