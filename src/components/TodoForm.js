import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			text: ''
		}
	}

	onChangeText(text){
		this.setState({
			text
		})
	}

	onPress(){
		this.props.dispatchAddTodo(this.state.text);
		this.setState({text: ''});//limpo o input depois de add na lista
	}

	render() {
		const { text } = this.state;
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
	  	    		title="add" 
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
  	flex:1,
  },
});


export default connect(null, {
	dispatchAddTodo: addTodo
})(TodoForm);
