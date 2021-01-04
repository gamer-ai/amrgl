import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Confirm from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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

  const AddComponent = props =>  {
    const classes = useStyles();
    const [primeData, setPrime] = React.useState({
        primetype: '',
        primename: '',
        addnew: false,
      });
    
      const handlePrimeChange = (event) => {
        const name = event.target.name;
        console.log(name)
        setPrime({ ...primeData, [name]: event.target.value});
        //handle child state change
      };
  
      const handleClickAddConfirm = ()=> {
        setPrime({ ...primeData, addnew: true });
        if (props.onChange) {
            props.onChange(primeData);
 
          }
      };
    return (
      <div>
        <div className = {classes.margin}></div>
        <Grid container direction="row" alignItems="center">
        <Grid item>
        <FormControl size="small" variant="filled" className={classes.textField}>
          <InputLabel htmlFor="filled-age-native-simple">+ Primes</InputLabel>
          <Select
            native
            value={primeData.primetype}
            onChange={handlePrimeChange}
            inputProps={{
              name: 'primetype',
              id: 'filled-primes-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'BOX'}>BOX</option>
          </Select>
        </FormControl>
        </Grid>
        </Grid>
        <div>
      <Grid container direction="column" alignItems="left">
        <Grid item>
          <TextField
                size = "small"
                id="filled-secondary-x"
                variant="filled"
                color="secondary"
                label="center position"
                type="number"
                // defaultValue = {values.planesize}
                // onChange={handleGridChange('planesize')}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">X:</InputAdornment>,
                }}
              />
        </Grid>
        <Grid item>
          <TextField
                  size = "small"
                  id="filled-secondary-y"
                  variant="filled"
                  color="secondary"
                  label="center position"
                  type="number"
                // //   onChange={handleGridChange('gridsize')}
                //   defaultValue = {values.gridsize}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Y:</InputAdornment>,
                  }}
                />
        </Grid>
        <Grid item>
          <TextField
                  size = "small"
                  id="filled-secondary-z"
                  variant="filled"
                  color="secondary"
                  label="center position"
                  type="number"
                // //   onChange={handleGridChange('gridsize')}
                //   defaultValue = {values.gridsize}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Z:</InputAdornment>,
                  }}
                />
        </Grid>
        <div className = {classes.margin}></div>
        <Grid item>
        <Fab size="small" color = "secondary" aria-label="confirm grid" onClick = {handleClickAddConfirm} color = {primeData.addnew ? "primary" : "default" }>
              <Confirm />
          </Fab>
        </Grid>
      </Grid>
      </div>
      </div>
    );
  }
  

  export default AddComponent;