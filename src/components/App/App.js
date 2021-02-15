import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'Redux';

const App = () => {
	const items = [
		{
			value: 'Redux',
			isDone: true
		},
		{
			value: 'Immutable',
			isDone: false
		},
		{
			value: 'Additional',
			isDone: true
		}
  	];

	return ( 
		<div className={styles.wrap}>
			<h1 className={styles.title}>todos</h1>
			<InputItem />
			<ItemList items = {items} />
			<Footer count = {2} />
		</div>);
}

export default App;