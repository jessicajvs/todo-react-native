import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
	<TextInput 
		style={styles.input}
		onChangeText={onChangeText} 
		value={value}
	/>
);

const styles = StyleSheet.create({
  input: {
  	paddingTop: 8,
  	paddingBottom: 10,
  	paddingLeft: 5,
  	fontSize: 20
  },
});

export default Input;