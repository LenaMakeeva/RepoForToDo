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
		this.setState ({
			inputValue: ''
		});
		const isExist = item => item.value === this.state.inputValue ;
		if (this.state.inputValue === '') { //проверка на пустую строку
			this.setState ({error: true, errorText: 'Поле не может быть пустым'});
		} else if (this.props.items.some(isExist)) {
			this.setState ({error: true, errorText: 'Данная задача была добавлена ранее'});
		}
		else {
				this.setState({
					errorText: '',
					error: false
				});
				this.props.onClickAdd(this.state.inputValue);
			};
			
	};

	render() {

		const { onClickAdd, items } = this.props;

		return (
		<div>
			<TextField
			    label="Добавить задачу"
		        error={this.state.error}
		        helperText={this.state.errorText}
		        fullWidth
		        margin="normal"
		        value={this.state.inputValue}
		        onChange={event => this.setState({inputValue: event.target.value})}      
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
	inputValue: PropTypes.string,
	helperText: PropTypes.string,
	onButtonClick: PropTypes.func
};

export default InputItem;