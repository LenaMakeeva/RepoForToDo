import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<footer className={styles.footer}>
	<div>Вот столько дел осталось сделать: <span className={styles.count}>{count}</span></div>
</footer>);

export default Footer;