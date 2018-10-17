import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText, updateTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
	onChangeText(text){
		this.props.dispatchSetTodoText(text);
	}

	onPress(){
		const { todo } = this.props;
		if(todo.id){
			this.props.dispatchUpdateTodo(todo);
		} else {
			const { text } = todo; 
			this.props.dispatchAddTodo(text);
		}
	}

	render() {
		const { text, id } = this.props.todo;
	  	return (
	  	  <View style={styles.container}>
	  	    <View style={styles.inputContainer}>
	  	    	<Input  
	  	    		onChangeText={text => this.onChangeText(text)}
	  	    		value={text} 
	  	    	/>
	  	    </View>
	  	    <View style={styles.buttonContainer}>
	  	    	<Button 
	  	    		title={id ? "Editar" : "Adicionar"}
	  	    		onPress={() => this.onPress()} />
	  	    </View>
	  	  </View>
	  	);
	}
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
  },
  inputContainer: {
  	flex:4,
  },
  buttonContainer: {
  	flex:2,
  },
});

const mapStateToProps = state => {
	return {
		todo: state.editingTodo
	}
}

export default connect(mapStateToProps, {
	dispatchAddTodo: addTodo,
	dispatchSetTodoText: setTodoText,
	dispatchUpdateTodo: updateTodo
})(TodoForm);
