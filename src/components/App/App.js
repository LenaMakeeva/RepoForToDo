import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Redux';

const App = () => {
	const items = [
		{
			value: 'Redux'
		},
		{
			value: 'Immutable'
		},
		{
			value: 'Additional'
		}
  	];

	return ( 
	<div className='wrap'>
		<h1 className='wrap__title'>todos</h1>
		<InputItem />
		<ItemList items = {items} />
		<Footer count = {2} />
	</div>);
}

export default App;