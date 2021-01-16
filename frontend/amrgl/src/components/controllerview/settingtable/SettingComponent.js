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





const useStyles = makeStyles((theme) => ({
  sliderroot: {
    width: 100 + theme.spacing(3) * 2,
  },
  slidermargin: {
    height: theme.spacing(2),
  },
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

const RedSlider = withStyles({
  root: {
    color: 'red',
    height: 4,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const GreenSlider = withStyles({
  root: {
    color: 'green',
    height: 4,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const BlueSlider = withStyles({
  root: {
    color: 'blue',
    height: 4,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


// export default function InputAdornments() {
const GridSettings = props =>{
  const classes = useStyles();
  const [values, setValues] = React.useState({
    planesize: 6000,
    gridsize: 50,
    gridChange: false,
    lightR: 0.45,
    lightG: 0.45,
    lightB: 0.45,
    // colorChange: false,
  });

  const handleGridChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, gridChange: false});
    //handle child state change
  };
  const handleColorChange = (prop) => (event, slidervalue) => {
    setValues({ ...values, [prop]: slidervalue, gridChange: false});
    //handle child state change
  };

  const handleClickGridConfirm = ()=> {
    setValues({ ...values, gridChange: true });
    if (props.onChange) {
        props.onChange(values);
      }
  };

  // const handleClickColorConfirm = ()=> {
  //   setValues({ ...values, colorChange: true });
  //   if (props.onChange) {
  //       props.onChange(values);
  //     }
  // };

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
                defaultValue = {values.planesize}
                onChange={handleGridChange('planesize')}
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
                  onChange={handleGridChange('gridsize')}
                  defaultValue = {values.gridsize}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">inch</InputAdornment>,
                  }}
                />
        </Grid>
        <Grid item>
          <Fab size="small" color = "secondary" aria-label="confirm grid" onClick = {handleClickGridConfirm} color = {values.gridChange ? "primary" : "default" }>
              <Confirm />
          </Fab>
        </Grid>
      </Grid>
      </div>
      <Grid container direction="row" alignItems="left">
        <Grid item>
        <div className={classes.sliderroot}>
        <div className={classes.slidermargin} />
        
        <Button size = "small" disabled style={{ color: "black" }}> Background <ColorLensIcon fontSize = "large"></ColorLensIcon></Button>
          <div className={classes.slidermargin} />
          <RedSlider valueLabelDisplay="auto" aria-label="pretto slider 2" defaultValue={0.45} min = {0} max = {1} step = {0.01} onChange={handleColorChange('lightR')}/>
          <div className={classes.slidermargin} />
          <BlueSlider valueLabelDisplay="auto" aria-label="pretto slider 3" defaultValue={0.45} min = {0} max = {1} step = {0.01} onChange={handleColorChange('lightG')}/>
          <div className={classes.slidermargin} />
          <GreenSlider valueLabelDisplay="auto" aria-label="pretto slider 4" defaultValue={0.45} min = {0} max = {1} step = {0.01} onChange={handleColorChange('lightB')}/>
        </div>
        </Grid>
        {/* <Grid item>
        <div className={classes.slidermargin} />
          <Fab size="small" color = "secondary" aria-label="confirm color" onClick = {handleClickColorConfirm} color = {values.colorChange ? "primary" : "default" }>
              <Confirm />
          </Fab>
        </Grid> */}
      </Grid>
      <div>

      </div>
    </div>
  );
}

export default GridSettings;