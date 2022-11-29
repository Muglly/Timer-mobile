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
        <ButtonAlarm />
        <ButtonStart setStart={setStart} />
      </View>
    );
  } else if (start == true) {
    return <Counter minutes={minutes} seconds={seconds} setStart={setStart} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
