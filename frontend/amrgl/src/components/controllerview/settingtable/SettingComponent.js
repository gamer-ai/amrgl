import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Confirm from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '12ch',
    background: "white",
    borderRadius: 8,
    opacity: 0.8,
  },
}));

// export default function InputAdornments() {
const GridSettings = props =>{
  const classes = useStyles();
  const [values, setValues] = React.useState({
    planesize:'',
    gridsize: '',

  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    //handle child state change
  };

  const handleClickConfirm = ()=> {
    if (props.onChange) {
        props.onChange(values);
      }
  };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          size = "small"
          id="filled-secondary"
          variant="filled"
          color="secondary"
          label="plane size"
          type="number"
          onChange={handleChange('planesize')}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
          }}
        />
        <TextField
          size = "small"
          id="filled-secondary"
          variant="filled"
          color="secondary"
          label="grid size"
          type="number"
          onChange={handleChange('gridsize')}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
          }}
        />
         <Fab size="small" color = "secondary" aria-label="confirm">
            <Confirm onClick = {handleClickConfirm}/>
        </Fab>
      </div>

    </div>
  );
}

export default GridSettings;