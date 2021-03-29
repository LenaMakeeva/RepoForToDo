import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({ count, countUndone, countDone, onClickFilter }) => (<footer className={styles.footer}>
	 
        <Button onClick={() => onClickFilter('all')} className={styles.filter} >
            все: {count}
        </Button>
        <Button onClick={() => onClickFilter('active')} className={styles.filter}>
            активные: {countUndone}
        </Button>
        <Button onClick={() => onClickFilter('finished')} className={styles.filter}>
            выполнено: {countDone}
        </Button>
        
</footer>);

Footer.propTypes = {
	count: PropTypes.number.isRequired,
	countDone: PropTypes.number.isRequired,
	countUndone: PropTypes.number.isRequired
};

export default Footer;