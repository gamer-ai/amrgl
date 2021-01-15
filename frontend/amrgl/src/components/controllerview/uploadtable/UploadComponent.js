import React from "react";
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Confirm from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Swal from 'sweetalert2';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    margin: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textField: {
      width: '30ch',
      background: "white",
      borderRadius: 8,
      opacity: 0.8,
    },
  }));
  
/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
const FileUpload = props =>{
  const classes = useStyles();
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
    <div className={classes.root}>
    <div>
    <Grid container direction="column" alignItems="left">
      <Grid item>
        <TextField
                size = "small"
                id="filled-secondary-planesize"
                variant="outlined"
                color="secondary"
                type="file"
                defaultValue = {file.name}
                onChange={handleUpload}
                className={clsx(classes.margin, classes.textField)}
                />
        </Grid>
      <Grid item>
        <div id="upload-states-info">
        <p>Filename: {file.name}</p>
        <p>File size: {file.size} bytes</p>
        </div>
        </Grid>
    </Grid>
    </div>
    </div>

  );
}

export default FileUpload;
