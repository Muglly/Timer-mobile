import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Gradient() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(15, 12, 41,0.8)', 'rgba(15, 12, 41, 0.3)']}
      style={styles.background}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
