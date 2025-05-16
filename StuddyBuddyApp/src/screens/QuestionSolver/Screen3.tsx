import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen3({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 3: Show Hints with Option for Theory Explanation</Text>
      {/* TODO: Show hints and button for theory explanation */}
      <Button title="Next" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
