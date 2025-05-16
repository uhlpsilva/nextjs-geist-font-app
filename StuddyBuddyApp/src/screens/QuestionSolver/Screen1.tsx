import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1: Select Curriculum, Subject, Grade, Upload Question</Text>
      {/* TODO: Add form inputs and image upload */}
      <Button title="Next" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
