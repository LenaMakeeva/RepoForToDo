import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
	state ={
		inputValue: '',
		wrongValue: '',
		errorText: '', //текст ошибки
		error: false //является ли ошибкой
	};

	onButtonClick = () => { //вызывает обработчик onClickAdd предварительно очистив inputValue

		if (this.state.inputValue !== this.state.wrongValue) { //проверка на пустую строку
			this.setState({  
				inputValue: '',
				errorText: '',
				error: false
			});

			this.props.onClickAdd(this.state.inputValue);
		} else {
			this.setState({
				errorText: 'Введите задачу',
				error: true
			});
		}		
	}

	render() {

		const { onClickAdd } = this.props;

		return (<div>
		<TextField
		    label="Добавить задачу"
	        multiline
	        rowsMax={2}
	        fullWidth
	        margin="normal"
	        value={this.state.inputValue}
	        onChange={event => this.setState({inputValue: event.target.value.toUpperCase() })}
	        helperText={this.state.errorText}
	        error={this.state.error}
		   />

	    <Button 
	    	variant="contained"
	    	fullWidth
	    	onClick={this.onButtonClick}
	    >
	    	Добавить
	    </Button>
		</div>);
	}
}

InputItem.propTypes = {
	onClickAdd: PropTypes.func.isRequired
}

export default InputItem;