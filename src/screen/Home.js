import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import PickerComponent from '../components/Picker';
import ButtonAlarm from '../components/ButtonAlarm';

export function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(15, 12, 41,0.8)', 'rgba(15, 12, 41, 0.3)']}
        style={styles.background}
      />
      <Text style={{ color: '#fff', fontSize: 30 }}>Selecr your time:</Text>
      <PickerComponent />
      <ButtonAlarm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
