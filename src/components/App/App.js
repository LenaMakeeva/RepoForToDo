import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import MenuList from '@material-ui/core/MenuList';

const App = () => 
	(<Router> 
		<div className={styles.wrap}>
			<Card className={styles.sidebar}>
				<MenuList>
					<Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
					<Link to='/Todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
					<Link to='/Contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
	      		</MenuList>
	      	</Card>
			<Card variant="outlined" className={styles.content}>
	    		<CardContent>
	    			<Route path='/' exact component={About} />
	    			<Route path='/Todo' exact component={Todo} />
	    			<Route path='/Contacts' exact component={Contacts} />
				</CardContent>
			</Card>
		</div>
	</Router>);

export default App;