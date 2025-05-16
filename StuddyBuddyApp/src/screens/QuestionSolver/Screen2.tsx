import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2: Show Question Image and Options</Text>
      {/* TODO: Show uploaded question image and options */}
      <Button title="Next" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
