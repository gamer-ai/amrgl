import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Confirm from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
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
    gridChange: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, gridChange: false});
    //handle child state change
  };

  const handleClickConfirm = ()=> {
    setValues({ ...values, gridChange: true });
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
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <TextField
                size = "small"
                id="filled-secondary-planesize"
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
        </Grid>
        <Grid item>
          <TextField
                  size = "small"
                  id="filled-secondary-gridsize"
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
        </Grid>
        <Grid item>
          <Fab size="small" color = "secondary" aria-label="confirm" onClick = {handleClickConfirm} color = {values.gridChange ? "primary" : "default" }>
              <Confirm />
          </Fab>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default GridSettings;