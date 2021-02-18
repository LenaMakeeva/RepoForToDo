import React from 'react';
import Item from '../Item/Item';
import classnames from 'classnames'; 
import styles from '../ItemList/ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul className={styles.lists}>
	{items.map(item => <li key={item.value} className={styles.list}>
		<Item
			value={item.value}
			isDone={item.isDone}
			id={item.id}
			onClickDone={onClickDone}
		/>
	</li>)}
</ul>);

export default ItemList;
