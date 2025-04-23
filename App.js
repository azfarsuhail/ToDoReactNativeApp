// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import TodoList from './features/todos/ToDoList';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
        <Text style={styles.title}>📝 My Todo App</Text>
        <TodoList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
});
