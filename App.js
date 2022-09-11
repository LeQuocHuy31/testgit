import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
          <Button>1234 readme dad ada dada dadada dadadad</Button>
          <Text>hdaudyaud</Text>
      </View>
      <View style={styles.container}>
          <Button>1234 readme dad ada dada dadada dadadad</Button>
          <StatusBar style="auto" />
      </View>
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
