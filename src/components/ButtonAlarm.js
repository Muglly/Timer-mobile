import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ButtonAlarm() {
  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: true,
      sound: 'alarm 1',
      file: 'alarm1.mp3',
    },
    {
      id: 2,
      selected: false,
      sound: 'alarm 2',
      file: 'alarm2.mp3',
    },
  ]);

  const setAlarm = (id) => {
    let alarmTamp = alarmSound.map((alarm) => {
      if (id != alarm.id) alarm.selected = false;
      else alarm.selected = true;
      return alarm;
    });

    setAlarmSound(alarmTamp);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {alarmSound.map((alarm) => {
        if (alarm.selected) {
          return (
            <TouchableOpacity
              style={styles.btnSelected}
              onPress={() => setAlarm(alarm.id)}
              key={alarm.id}
            >
              <Text style={styles.alarm}>{alarm.sound}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity style={styles.btn} onPress={() => setAlarm(alarm.id)} key={alarm.id}>
              <Text style={styles.alarm}>{alarm.sound}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  btnSelected: {
    padding: 8,
    margin: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(15, 12, 41, 0.5)',
    borderColor: '#fff',
    borderWidth: 1,
  },
  btn: {
    padding: 8,
    margin: 10,
    borderRadius: 4,
    backgroundColor: 'rgb(15, 12, 41)',
    alignItems: 'center',
  },
  alarm: {
    color: '#fff',
    fontWeight: '700',
  },
});
