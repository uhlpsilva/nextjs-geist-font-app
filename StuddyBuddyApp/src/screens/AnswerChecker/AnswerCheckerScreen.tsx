import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AnswerCheckerScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Answer Checker Screen</Text>
      {/* TODO: Implement curriculum, subject, grade selection and image upload */}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
