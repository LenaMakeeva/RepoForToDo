import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const todoItem = 'Redux';

class App extends React.Component {
	state = {
		items : [
			{
				value: 'Создать приложение',
				isDone: true,
				id: 1
			},
			{
				value: 'Сделать структуру приложения',
				isDone: true,
				id: 2
			},
			{
				value: 'Добавить стили',
				isDone: false,
				id: 3
			}
		]
	};

	constructor(props) {
		super(props);

		this.onClickDone=this.onClickDone.bind(this);
	}

	onClickDone = id => {
		const newItemList = this.state.items.map(item => { //проверка изменившихся элементов
			const newItem = { ...item }; //деструктуризация ItemList

			if (item.id === id) { //проверка был нажат элемент или нет
				newItem.isDone = !item.isDone; //изменение isDone на противоположный 
			}

			return newItem;
		});

		this.setState({ items: newItemList });
	};

	render() {
		return ( 
			<div className={styles.wrap}>
				<Card variant="outlined">
		        	<CardContent>
						<h1 className={styles.title}>Список задач</h1>
						<InputItem />
						<ItemList items={this.state.items} onClickDone={this.onClickDone} />
						<Footer count = {2} />
					</CardContent>
				</Card>
			</div>
		);
	}	
}

export default App;