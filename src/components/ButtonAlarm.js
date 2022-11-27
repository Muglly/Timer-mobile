import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ButtonAlarm() {
  const [alarmSound, setAlarmSound] = useState([
    {
      selected: true,
      sound: 'alarm 1',
      file: 'alarm1.mp3',
    },
    {
      selected: false,
      sound: 'alarm 2',
      file: 'alarm2.mp3',
    },
  ]);

  return (
    <View style={{ flexDirection: 'row' }}>
      {alarmSound.map((val) => {
        return (
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.alarm}>{val.sound}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    margin: 10,
    borderRadius: 4,
    backgroundColor: '#0f0c29',
    alignItems: 'center',
  },
  alarm: {
    color: '#fff',
    fontWeight: '700',
  },
});
