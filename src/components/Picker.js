import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

export default function PickerComponent() {
  let number = [];
  for (let i = 0; i <= 60; i++) {
    number.push(i);
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <Picker style={{ color: '#fff', height: 50, width: 100 }}>
        {number.map((val) => {
          return <Picker.Item label={val.toString()} value={val.toString()} />;
        })}
      </Picker>

      <Picker style={{ color: '#fff', height: 50, width: 100 }}>
        {number.map((val) => {
          return <Picker.Item label={val.toString()} value={val.toString()} />;
        })}
      </Picker>
    </View>
  );
}
