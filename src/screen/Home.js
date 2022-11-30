import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonStart from '../components/ButtonStart';
import ButtonAlarm from '../components/ButtonAlarm';
import PickerComponent from '../components/Picker';
import { Gradient } from '../components/Gradient';
import { Counter } from './Counter';

export function Home() {
  const [start, setStart] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: false,
      sound: 'alarm 1',
      file: require('../../assets/alarme1.mp3'),
    },
    {
      id: 2,
      selected: false,
      sound: 'alarm 2',
      file: require('../../assets/alarme2.mp3'),
    },
  ]);

  if (start == false) {
    return (
      <View style={styles.container}>
        <Gradient />
        <Text style={{ color: '#fff', fontSize: 30, marginTop: '20%' }}>Selecr your time:</Text>
        <PickerComponent
          minutes={minutes}
          setMinutes={setMinutes}
          seconds={seconds}
          setSeconds={setSeconds}
        />
        <ButtonAlarm alarmSound={alarmSound} setAlarmSound={setAlarmSound} />
        <ButtonStart setStart={setStart} />
      </View>
    );
  } else if (start == true) {
    return (
      <Counter
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        setStart={setStart}
        alarmSound={alarmSound}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
