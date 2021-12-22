import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus.js';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('');

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is the place who a i will build a time</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#252250',
  },
});
