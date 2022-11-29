import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, StyleSheet } from 'react-native';

export default function PickerComponent({ minutes, setMinutes, seconds, setSeconds }) {
  let number = [];
  for (let i = 0; i <= 60; i++) {
    number.push(i);
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.containerPicker}>
        <Text style={styles.textPicker}>Min:</Text>
        <Picker
          style={styles.picker}
          selectedValue={minutes}
          onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
        >
          {number.map((val) => {
            return (
              <Picker.Item label={val.toString()} value={val.toString()} key={val.toString()} />
            );
          })}
        </Picker>
      </View>

      <View style={styles.containerPicker}>
        <Text style={styles.textPicker}>Sec:</Text>
        <Picker
          style={styles.picker}
          selectedValue={seconds}
          onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
        >
          {number.map((val) => {
            return <Picker.Item label={val.toString()} value={val.toString()} />;
          })}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textPicker: {
    color: '#fff',
    padding: 16,
    fontSize: 18,
  },
  picker: {
    color: '#fff',
    height: 50,
    width: 100,
    fontSize: 18,
  },
});
