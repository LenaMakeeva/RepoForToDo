import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
	<TextField 
        id="standard-multiline-flexible"
        label="Добавить задачу"
        multiline
        rowsMax={2}
        fullWidth
        margin="normal"
    />
</div>);

export default InputItem;