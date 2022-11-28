import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function ButtonStart({ setStart }) {
  return (
    <View style={{ position: 'absolute', bottom: '20%' }}>
      <TouchableOpacity style={styles.btnStart} onPress={() => setStart(true)}>
        <Text style={styles.textStart}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnStart: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3F3B63',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStart: {
    color: '#fff',
    fontSize: 20,
  },
});
