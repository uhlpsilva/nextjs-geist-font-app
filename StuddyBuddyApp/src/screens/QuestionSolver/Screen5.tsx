import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen5({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 5: Show Feedback on Student Answer</Text>
      {/* TODO: Show feedback including what is right, mistakes, tips, stepwise solution */}
      <Button title="Next" onPress={() => navigation.navigate('Screen6')} />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
