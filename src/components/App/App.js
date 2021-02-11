import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Redux';

const App = () => (<div>
  <h1>todos</h1>
  <InputItem />
  <ItemList todoItem = {todoItem}/>
  <Footer count = {2} />
</div> );

export default App;