import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDelete}) => (<div className = {
  classnames({
     [styles.item]: true,
     [styles.done]: isDone
  })
}>	
	<span> 
		<Checkbox
	        checked={isDone}
	        color="default"
	        inputProps={{ 'aria-label': 'checkbox with default color' }}
	        onClick={() => onClickDone(id)}
	    />

	    {value}
    </span>

    <Tooltip title="Delete">
		<IconButton aria-label="delete">
    		<DeleteIcon 
    			onClick={() => onClickDelete(id)}
    		/>
  		</IconButton>
	</Tooltip>

</div>);


Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onClickDone: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	onClickDelete: PropTypes.func.isRequired
}

export default Item;