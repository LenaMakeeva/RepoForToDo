import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const todoItem = 'Redux';

const App = () => {
	const items = [
		{
			value: 'Создать приложение',
			isDone: true
		},
		{
			value: 'Сделать структуру приложения',
			isDone: true
		},
		{
			value: 'Добавить стили',
			isDone: false
		}
  	];

	return ( 
		<div className={styles.wrap}>
			<Card variant="outlined">
	        	<CardContent>
					<h1 className={styles.title}>Список задач</h1>
					<InputItem />
					<ItemList items = {items} />
					<Footer count = {2} />
				</CardContent>
			</Card>
		</div>
		);
}

export default App;