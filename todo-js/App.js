import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { TodoApp } from './TodoApp';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Provider store={store}>
            <TodoApp />
        </Provider>
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
