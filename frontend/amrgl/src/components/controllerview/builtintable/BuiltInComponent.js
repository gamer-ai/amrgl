import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Confirm from "@material-ui/icons/Check";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Swal from "sweetalert2";
import { library } from "@fortawesome/fontawesome-svg-core";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textFieldtop: {
    width: "32ch",
    background: "white",
    borderRadius: 8,
    opacity: 0.8,
  },
  textField: {
    width: "16ch",
    background: "white",
    borderRadius: 8,
    opacity: 0.8,
  },
}));

const BuiltInComponent = (props) => {
  const classes = useStyles();
  const [builtinData, setBuiltin] = React.useState({
    builtintype: "",
    builtinname: "",
    builtinnew: false,
    positionx: 0,
    positiony: 0,
    positionz: 0,
    scalex: 1,
    scaley: 1,
    scalez: 1,
    rotationx: 0,
    rotationy: 0,
    rotationz: 0,
  });

  const handleBuiltinChange = (event) => {
    const name = event.target.name;
    const eventvalue = event.target.value;
    setBuiltin({
        ...builtinData,
        [name]: event.target.value,
        builtinnew: false,
      });

    //handle child state change
  };

  const handlePositionChange = (prop) => (event) => {
    setBuiltin({ ...builtinData, [prop]: event.target.value, builtinnew: false });
    //handle child state change
  };

  const handleClickAddConfirm = () => {
    setBuiltin({ ...builtinData, builtinnew: true });
    if (props.onChange) {
      props.onChange(builtinData);
    }
  };
  return (
    <div>
      <div className={classes.margin}></div>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <FormControl
            size="small"
            variant="filled"
            className={classes.textFieldtop}
          >
            <InputLabel htmlFor="filled-age-native-simple">+ Models (All Fields Required)</InputLabel>
            <Select
              native
              value={builtinData.builtintype}
              onChange={handleBuiltinChange}
              inputProps={{
                name: "builtintype",
                id: "filled-builtins-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <optgroup label="Base">
              <option value={"Wall"}>Wall</option>
              <option value={"Floor"}>Floor</option>
              </optgroup>
              <optgroup label="Shelf System">
              <option value={"Storage_Shelf_100x40x150"}>Storage Shelf 100x40x150</option>
              </optgroup>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div>
        <Grid container direction="row" alignItems="left">
          <Grid item>
            <Grid container direction="column" alignItems="left">
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-name"
                  variant="filled"
                  color="secondary"
                  label="object name"
                  type="string"
                  // defaultValue = {values.planesize}
                  onChange={handlePositionChange("builtinname")}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={
                    {
                      // startAdornment: <InputAdornment position="start">required:</InputAdornment>,
                    }
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-x"
                  variant="filled"
                  color="secondary"
                  label="center position"
                  type="number"
                  defaultValue = {builtinData.positionx}
                  onChange={handlePositionChange("positionx")}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">X:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-y"
                  variant="filled"
                  color="secondary"
                  label="center position"
                  type="number"
                  onChange={handlePositionChange("positiony")}
                 defaultValue = {builtinData.positiony}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Y:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-z"
                  variant="filled"
                  color="secondary"
                  label="center position"
                  type="number"
                  onChange={handlePositionChange("positionz")}
                 defaultValue = {builtinData.positionz}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Z:</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-x"
                  variant="filled"
                  color="secondary"
                  label="rotation-x (degree)"
                  type="number"
                  defaultValue = {builtinData.rotationx}
                  onChange={handlePositionChange("rotationx")}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">X:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-y"
                  variant="filled"
                  color="secondary"
                  label="rotation-y (degree)"
                  type="number"
                  onChange={handlePositionChange("rotationy")}
                 defaultValue = {builtinData.rotationy}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Y:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-z"
                  variant="filled"
                  color="secondary"
                  label="rotation-z (degree)"
                  type="number"
                  onChange={handlePositionChange("rotationz")}
                 defaultValue = {builtinData.rotationz}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Z:</InputAdornment>
                    ),
                  }}
                />
              </Grid>

            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="left">
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-x"
                  variant="filled"
                  color="secondary"
                  label="scale-x"
                  type="number"
                  defaultValue = {builtinData.scalex}
                  onChange={handlePositionChange("scalex")}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">X:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-y"
                  variant="filled"
                  color="secondary"
                  label="scale-y"
                  type="number"
                  onChange={handlePositionChange("scaley")}
                  defaultValue = {builtinData.scaley}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Y:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  id="filled-secondary-z"
                  variant="filled"
                  color="secondary"
                  label="scale-z"
                  type="number"
                  onChange={handlePositionChange("scalez")}
                 defaultValue = {builtinData.scalez}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Z:</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <div className={classes.margin}></div>
              <Grid item>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="confirm grid"
                  onClick={handleClickAddConfirm}
                  color={builtinData.builtinnew ? "primary" : "default"}
                >
                  <Confirm />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BuiltInComponent;
