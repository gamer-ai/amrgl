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

const ExternalComponent = (props) => {
  
  const classes = useStyles();
  const [externalData, setExternal] = React.useState({
    externaltype: "",
    externalname: "",
    externalurl: "",
    externalnew: false,
    positionx: 0,
    positiony: 0,
    positionz: 0,
    scalex: 1,
    scaley: 1,
    scalez: 1,
    rotationx: 0,
    rotationy: 0,
    rotationz: 0,
    isloading: false,
  });

  const handleExternalChange = (event) => {
    const name = event.target.name;
    const eventvalue = event.target.value;
    setExternal({
      ...externalData,
      [name]: event.target.value,
      externalnew: false,
    });

    //handle child state change
  };

  const handlePositionChange = (prop) => (event) => {
    setExternal({
      ...externalData,
      [prop]: event.target.value,
      externalnew: false,
    });
    //handle child state change
  };

  function handleUpload(event) {
    setExternal({...externalData, externalurl: event.target.files[0], externalnew: false });
    // Add code here to upload file to server
    // ...
  }

  const handleClickAddConfirm = () => {
    if (!externalData.externalname) {
      Swal.fire({
        background: "black",
        icon: "info",
        text: "Please assign a name for your object",
      });
    } else {
      setExternal({ ...externalData, isloading: true, externalnew: true });
      if (props.onChange) {
        props.onChange(externalData);
      }
    }
  };

  return (
    <div>
      <div className={classes.margin}></div>
      <Grid container direction="column" alignItems="left">
        <Grid item>
          <FormControl
            size="small"
            variant="filled"
            className={classes.textFieldtop}
          >
            <InputLabel htmlFor="filled-age-native-simple">
              + Import Source
            </InputLabel>
            <Select
              native
              value={externalData.externaltype}
              onChange={handleExternalChange}
              inputProps={{
                name: "externaltype",
                id: "filled-externals-native-simple",
              }}
            >
              <option aria-label="None" value="" />

              <option value={"URL"}> External URL </option>
              <option value={"LOCAL"}> Local File </option>
            </Select>
          </FormControl>
        </Grid>
        {externalData.externaltype === "URL" && (
          <Grid item>
            <TextField
              size="small"
              id="filled-secondary-name"
              variant="filled"
              color="secondary"
              label="Paste URL below:"
              type="string"
              onChange={handlePositionChange("externalurl")}
              className={clsx(classes.margin, classes.textFieldtop)}
              InputProps={
                {
                  // startAdornment: <InputAdornment position="start">required:</InputAdornment>,
                }
              }
            />
          </Grid>
        )}

        {externalData.externaltype === "LOCAL" && (
          <Grid item>
            <TextField
              size="small"
              id="filled-secondary-planesize"
              variant="outlined"
              color="secondary"
              type="file"
              defaultValue={externalData.externalurl.name}
              onChange={handleUpload}
              className={clsx(classes.margin, classes.textFieldtop)}
              InputProps={
                {
                  // startAdornment: <InputAdornment position="start">required:</InputAdornment>,
                }
            }
            />
          </Grid>
        )}
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
                  onChange={handlePositionChange("externalname")}
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
                  defaultValue={externalData.positionx}
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
                  defaultValue={externalData.positiony}
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
                  defaultValue={externalData.positionz}
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
                  defaultValue={externalData.rotationx}
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
                  defaultValue={externalData.rotationy}
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
                  defaultValue={externalData.rotationz}
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
                  defaultValue={externalData.scalex}
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
                  defaultValue={externalData.scaley}
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
                  defaultValue={externalData.scalez}
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
                  color={externalData.externalnew ? "primary" : "default"}
                >
                  <Confirm />
                </Fab>
              </Grid>

              <Grid item>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="confirm grid"
                  color={externalData.externalnew ? "primary" : "secondary"}
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

export default ExternalComponent;
