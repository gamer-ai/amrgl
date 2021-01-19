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

const AddComponent = (props) => {
  const classes = useStyles();
  const [primeData, setPrime] = React.useState({
    primetype: "",
    primename: "",
    polyhydrontype: null,
    addnew: false,
    positionx: 0,
    positiony: 0,
    positionz: 0,
    scalex: 100,
    scaley: 100,
    scalez: 100,
    rotationx: 0,
    rotationy: 0,
    rotationz: 0,
  });

  const handlePrimeChange = (event) => {
    const name = event.target.name;
    const eventvalue = event.target.value;
    if (event.target.value == "POLYHYDRON") {
      // console.log('found')

      (async () => {
        console.log("selected Polyhydron, now choose type");
        const { value: Polyhydrons } = await Swal.fire({
          position: "top",
          background: "black",
          input: "select",
          inputOptions: {
            Polyhydrons: {
              0: "Tetrahedron",
              1: "Octahedron",
              2: "Dodecahedron",
              3: "Icosahedron",
              4: "Rhombicuboctahedron",
              5: "Triangular Prism",
              6: "Pentagonal Prism",
              7: "HexagonalPrism",
              8: "Square Pyramid (J1)",
              9: "Pentagonal Pyramid (J2)",
              10: "Triangular Dipyramid (J12)",
              11: "Pentagonal Dipyramid (J13)",
              12: "Elongated Square Dipyramid (J15)",
              13: "Elongated Pentagonal Dipyramid (J16)",
              14: "Elongated Pentagonal Cupola (J20)",
            },
          },
          inputPlaceholder: "Select a Polyhydron",
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              resolve();
            });
          },
        });
        if (Polyhydrons) {
          Swal.fire({
            background: "black",
            icon: "success",
            text: "Selected",
            showConfirmButton: false,
            timer: 1500,
          });
          setPrime({
            ...primeData,
            primetype: eventvalue,
            polyhydrontype: Polyhydrons,
            addnew: false,
          });
        }
      })();
    } else {
      setPrime({
        ...primeData,
        [name]: event.target.value,
        polyhydrontype: null,
        addnew: false,
      });
    }

    //handle child state change
  };

  const handlePositionChange = (prop) => (event) => {
    setPrime({ ...primeData, [prop]: event.target.value, addnew: false });
    //handle child state change
  };

  const handleClickAddConfirm = () => {
    setPrime({ ...primeData, addnew: true });
    if (props.onChange) {
      props.onChange(primeData);
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
            <InputLabel htmlFor="filled-age-native-simple">
              + Primes (All Fields Required)
            </InputLabel>
            <Select
              native
              value={primeData.primetype}
              onChange={handlePrimeChange}
              inputProps={{
                name: "primetype",
                id: "filled-primes-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"BOX"}>BOX</option>
              <option value={"SPHERE"}>SPHERE</option>
              <option value={"CYLINDER"}>CYLINDER</option>
              <option value={"POLYHYDRON"}>POLYHYDRON</option>
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
                  onChange={handlePositionChange("primename")}
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
                  defaultValue={primeData.positionx}
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
                  defaultValue={primeData.positiony}
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
                  defaultValue={primeData.positionz}
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
                  defaultValue = {primeData.rotationx}
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
                 defaultValue = {primeData.rotationy}
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
                 defaultValue = {primeData.rotationz}
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
                  defaultValue={primeData.scalex}
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
                  defaultValue={primeData.scaley}
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
                  defaultValue={primeData.scalez}
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
                  color={primeData.addnew ? "primary" : "default"}
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

export default AddComponent;
