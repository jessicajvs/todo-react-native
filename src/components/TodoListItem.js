import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const TodoListItem = ({todo, onPressTodo}) => (
      	<TouchableOpacity onPress={onPressTodo} >
      		<View style={styles.line}>
      			<Text style={styles.lineText}>
      				{ todo.text }
      			</Text>
      		</View>
      	</TouchableOpacity>
);

const styles = StyleSheet.create({
	line:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row'   
	},
	lineText:{
		fontSize: 20,
		paddingLeft: 15
	}
});


export default TodoListItem;