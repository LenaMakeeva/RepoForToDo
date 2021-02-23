import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<footer className={styles.footer}>
	<div>Вот столько дел осталось сделать: <span className={styles.count}>{count}</span></div>
</footer>);

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;