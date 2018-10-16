import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoForm from './components/TodoForm';

export default class TodoApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
  },
});
