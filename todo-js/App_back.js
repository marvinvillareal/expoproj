import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter]  = useState(0);

  const increment = () => {
    // counter += 1;
    setCounter(counter + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
      <Button
      title="Add"
        onPress={()=>{
          increment()
        }}
      ></Button>
    </SafeAreaView>
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
