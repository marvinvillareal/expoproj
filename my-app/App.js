import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import LoginButton from './app/components/LoginButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <LoginButton title='click'
              onPress={()=>{alert("Button tapped")}}
              style={styles.buttonView}
      ></LoginButton>
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
  buttonView: {
    borderColor: '#ff0',
    opacity: 0.8,
    backgroundColor: '#0FF',
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: 10
  }
});
