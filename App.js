import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Huy</Text>
      <Text>123 313</Text>
      <Text>123</Text>
      <Text>123 4555</Text>
      <StatusBar style="auto" />
        
        
        <Text>Huy</Text>
        <Text>Huy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
