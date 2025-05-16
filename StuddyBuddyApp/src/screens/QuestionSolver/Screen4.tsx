import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen4({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 4: Show Theory and Upload Student Answer Image</Text>
      {/* TODO: Show theory and image upload */}
      <Button title="Next" onPress={() => navigation.navigate('Screen5')} />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
