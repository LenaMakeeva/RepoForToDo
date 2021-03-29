import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const Todo = () => {
	const initialState = {
		items : [ 
			{
				value: 'Написать приложение',
				isDone: false,
				id: 1
			},
			{
				value: 'Добавить стили',
				isDone: false,
				id: 2
			}
		],
		count : 2,
		// сountDone: 0,
		// countUndone: 2,
		// filteredItems: [],
		// filter: 'all',
		// selectedId: -1
	};

	const [items,setItems] = useState(initialState.items);
	const [count,setCount] = useState(initialState.count);
	// const [countDone, setCountDone] = useState(initialState.countDone);	
	// const [countUndone, setCountUndone] = useState(initialState.countUndone);
	const [filter, setFilter] = useState('all');
	let newItemList;


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
		const deletedItemList = items.filter(item => item.id !== id);

		setItems(deletedItemList);
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

	const countUndone = (items.filter((item) => item.isDone === false)).length;
	const countDone = (items.filter((item) => item.isDone === true)).length;

	const onClickFilter = filtered => setFilter(filtered);
	switch (filter) {
  		case 'active':
    		newItemList = items.filter (item => !item.isDone);
    		break;
  		case 'finished':
    		newItemList = items.filter (item => item.isDone);
    		break;
 		default:
    		newItemList = items;
	}

	return ( 
		<div className={styles.wrap}>
			<Card variant="outlined" className={styles.content}>
	    		<CardContent>
					<h1 className={styles.title}>Список задач</h1>
					<InputItem onClickAdd={onClickAdd}/>
					<ItemList
						items={newItemList}
						onClickDone={onClickDone}
						onClickDelete={onClickDelete}
					/>
					<Footer 
						filtered={filter}
						onClickFilter={onClickFilter}
						count = {count}
						countDone = {countDone}
						countUndone = {countUndone}
					/>
				</CardContent>
			</Card>
		</div>
	);
}

Todo.propTypes = {
  items: PropTypes.array,
  count: PropTypes.number,
  countDone: PropTypes.number,
  countUndone: PropTypes.number
};

export default Todo;