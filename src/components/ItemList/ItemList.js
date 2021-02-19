import React from 'react';
import Item from '../Item/Item';
import classnames from 'classnames'; 
import styles from '../ItemList/ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.lists}>
	{items.map(item => <li key={item.value} className={styles.list}>
		<Item
			value={item.value}
			isDone={item.isDone}
			id={item.id}
			onClickDone={onClickDone}
			onClickDelete={onClickDelete}
		/>
	</li>)}
</ul>);

ItemList.defaultProps = {
	items : [
		{
			value: 'Задание №1',
			isDone: true,
			id: 1
		}
	]
}

export default ItemList;
