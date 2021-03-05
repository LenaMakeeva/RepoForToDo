import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const todoItem = 'Redux';

const App = () => {
	const initialState = {
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
		],
		count : 3
	};

	const [items,setItems] = useState(initialState.items);
	const [count,setCount] = useState(initialState.count);

	useEffect(() => {
		console.log('componentDidMount');
	}, []);

	useEffect (() => {
		console.log('componentDidUpdate');
	});

	const onClickDone = id => {
		const newItemList = items.map(item => { //проверка изменившихся элементов
			const newItem = { ...item }; //деструктуризация ItemList

			if (item.id === id) { //проверка был нажат элемент или нет
				newItem.isDone = !item.isDone; //изменение isDone на противоположный 
			}

			return newItem;
		});

		setItems(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !== id);

		setItems(newItemList);
		setCount((count) => count -1);
	};

	const onClickAdd = value => { //создаем новый state
		const newItems = [ // создаем новый массив items
			...items, //переложение всех существующих item с помощью деструктуризачии, чтобы получился новый
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItems(newItems);
		setCount((count) => count + 1);
	};

	return ( 
		<div className={styles.wrap}>
			<Card variant="outlined">
	    		<CardContent>
					<h1 className={styles.title}>Список задач</h1>
					<InputItem onClickAdd={onClickAdd}/>
					<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete}/>
					<Footer count = {count} />
				</CardContent>
			</Card>
		</div>
	);
}

export default App;