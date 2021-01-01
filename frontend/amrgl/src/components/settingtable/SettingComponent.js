import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '12ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    planesize:'',
    password: '',
    gridsize: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          size = "small"
          id="filled-secondary"
          variant="filled"
          color="secondary"
          label="plane size"
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
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">inch</InputAdornment>,
          }}
        />
        {/* <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}

      </div>
      <div>
      <FormControl size = "small" className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            value={values.weight}
            onChange={handleChange('width')}
            endAdornment={<InputAdornment position="end">inch</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'width',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">plane size</FormHelperText>
        </FormControl>

        <FormControl size = "small" className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            value={values.weight}
            onChange={handleChange('gridsize')}
            endAdornment={<InputAdornment position="end">inch</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'gridsize',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">grid size</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}