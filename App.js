import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus.js';
import { Timer } from './src/features/timer/Timer.js';
import { colors } from './src/utils/colors.js';
import { paddingSizes } from './src/utils/sizes.js';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");

  return (
    <View style={styles.container}>
      {focusSubject ? (
       <Timer focusSubject={focusSubject}/>
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
    paddingTop: paddingSizes.md,
    padding: 1,
    backgroundColor: colors.darkBlue,
  },
});
