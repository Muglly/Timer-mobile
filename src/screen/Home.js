import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PickerComponent from '../components/Picker';

export function Home() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [alarmSound, setAlarmSound] = useState([
    {
      selected: true,
      sound: 'alarm 1',
      file: 'alarm1.mp3',
    },
    {
      selected: false,
      sound: 'alarm e',
      file: 'alarm2.mp3',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 30 }}>Selecr your time:</Text>
      <PickerComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0c29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
