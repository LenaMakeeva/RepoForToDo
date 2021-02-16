import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone }) => (<div className = {
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
	        onClick={() => onClickDone(isDone)}
	    />

	    {value}
    </span>

    <Tooltip title="Delete">
		<IconButton aria-label="delete">
    		<DeleteIcon />
  		</IconButton>
	</Tooltip>

</div>);

export default Item;