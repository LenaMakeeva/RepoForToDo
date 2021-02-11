import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
	<li><Item todoItem = {todoItem} /></li>
	<li><Item todoItem = {'Immutable'} /></li>
</ul>);

export default ItemList;