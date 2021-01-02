import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

const ScaleLine = props => {
// export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="left" className={classes.root}>
              plane:
        <Divider orientation="vertical" flexItem />
                {props.children.planesize}
        <Divider orientation="vertical" flexItem />
              grid:  
        <Divider orientation="vertical" flexItem />
            {props.children.gridsize}
      </Grid>
    </div>
  );
}
export default ScaleLine;