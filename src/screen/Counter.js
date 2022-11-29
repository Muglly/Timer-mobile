import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Gradient } from '../components/Gradient';

export function Counter({ minutes, seconds, setStart }) {
  return (
    <View style={styles.container}>
      <Gradient />
      <View style={styles.box}>
        <Text style={styles.timer}>{`${minutes}:${seconds}`}</Text>
      </View>
      <TouchableOpacity style={styles.btnStop} onPress={() => setStart(false)}>
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
