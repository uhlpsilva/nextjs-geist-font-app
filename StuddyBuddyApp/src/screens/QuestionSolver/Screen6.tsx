import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen6({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 6: Show Similar Questions</Text>
      {/* TODO: Show similar questions and navigation */}
      <Button title="Previous" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
