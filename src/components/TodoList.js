<<<<<<< HEAD
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';

const TodoList = ({ todos,dispatchToggleTodo }) => (
	<View>
		{ todos.map(todo =>
			(
			 	<TodoListItem 
			 		key={todo.id}
			 		todo={todo}
			 		onPressTodo={() => dispatchToggleTodo(todo.id)}
			 	/>
			)
		)}
	</View>
);

const styles = StyleSheet.create({

});
=======
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import TodoListItem from './TodoListItem';
import { toggleTodo }  from '../actions';

const TodoList = ({ todos, dispatchToggleTodo }) => (
	<View>
		{todos.map(todo => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					onPressTodo={() => dispatchToggleTodo(todo.id) }
				/>
				)
			)
		}
	</View>
);

const styles = StyleSheet.create({});
>>>>>>> 415ad70a2e98032242a6e61d30885bcb63284a51

const mapStateToProps = state => {
	const { todos } = state;
	return { todos };
}

<<<<<<< HEAD
export default connect(mapStateToProps, {dispatchToggleTodo: toggleTodo})(TodoList);
=======
export default connect(
	mapStateToProps, 
	{ dispatchToggleTodo: toggleTodo}
)(TodoList);
>>>>>>> 415ad70a2e98032242a6e61d30885bcb63284a51
