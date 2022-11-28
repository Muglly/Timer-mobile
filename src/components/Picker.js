import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

export default function PickerComponent({ minutes, setMinutes, seconds, setSeconds }) {
  let number = [];
  for (let i = 0; i <= 60; i++) {
    number.push(i);
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: '#fff', padding: 16 }}>Min:</Text>
      <Picker
        style={{ color: '#fff', height: 50, width: 100 }}
        selectedValue={minutes}
        onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
      >
        {number.map((val) => {
          return <Picker.Item label={val.toString()} value={val.toString()} key={val.toString()} />;
        })}
      </Picker>

      <Text style={{ color: '#fff', padding: 16 }}>Sec:</Text>
      <Picker
        style={{ color: '#fff', height: 50, width: 100 }}
        selectedValue={seconds}
        onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
      >
        {number.map((val) => {
          return <Picker.Item label={val.toString()} value={val.toString()} />;
        })}
      </Picker>
    </View>
  );
}
