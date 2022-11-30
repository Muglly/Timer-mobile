import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

import { Gradient } from '../components/Gradient';

export function Counter({ minutes, setMinutes, seconds, setSeconds, setStart, alarmSound }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds <= 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (!done) {
            setDone(true);
            setStart(false);
            setMinutes(0);
            setSeconds(0);
            playAlarm();
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const playAlarm = async () => {
    const playSound = new Audio.Sound();

    try {
      let soundFile;
      alarmSound.map((alarm) => {
        if (alarm.selected) {
          soundFile = alarm.file;
        }
      });

      await playSound.loadAsync(soundFile);
      await playSound.playAsync();
    } catch (error) {
      console.log('playAlarme error ', error);
      console.log(soundFile);
    }
  };

  const reset = () => {
    setStart(false);
    setMinutes(0);
    setSeconds(0);
  };

  const formatNumber = (number) => {
    let finalNumber = '';
    if (number < 10) {
      finalNumber = `0${number}`;
    } else {
      finalNumber = number;
    }
    return finalNumber;
  };

  const minute = formatNumber(minutes);
  const second = formatNumber(seconds);

  return (
    <View style={styles.container}>
      <Gradient />
      <View style={styles.box}>
        <Text style={styles.timer}>{`${minute}:${second}`}</Text>
      </View>
      <TouchableOpacity style={styles.btnStop} onPress={() => reset()}>
        <Text style={styles.textStop}>STOP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    width: '95%',
    height: 300,
    backgroundColor: '#3F3B63',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  timer: {
    color: '#fff',
    fontSize: 100,
  },
  btnStop: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DE072F',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '20%',
  },
  textStop: {
    color: '#fff',
    fontSize: 20,
  },
});
