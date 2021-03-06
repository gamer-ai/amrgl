import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import SetIcon from "@material-ui/icons/TuneTwoTone";
import DownloadIcon from "@material-ui/icons/GetAppRounded";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Setting from "./settingtable/SettingComponent";
import Upload from "./uploadtable/UploadComponent";
import Library from "./builtintable/BuiltInComponent";
import ViewPort from "./viewer/ViewPortComponent";
import External from "./externaltable/ExternalComponent";
import "./ViewWithControl.css";
import Scaleline from "./viewer/ScalelineComponent";
import Add from "./addtable/AddComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginRight: theme.spacing(2),
      fontsize: 12,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  const [settingData, setSettings] = React.useState({
    planesize: 6000,
    gridsize: 50,
    gridChange: false,
    confirmed: false,
    lightR: 0.45,
    lightG: 0.45,
    lightB: 0.45,
  });

  const [addData, setAdd] = React.useState({
    primetype: "",
    primename: "",
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

  const [libraryData, setBuiltin] = React.useState({
    buultintype: "",
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

  const [externalData, setExternal] = React.useState({
    externaltype: "",
    externalname: "",
    externalurl: "",
    externalnew: false,
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

  const [fileControl, setFileControl] = React.useState({
    file: "",
    fileadd: false,
  });

  const changeAdd = (data) => {
    if (
      data.primetype != addData.primetype ||
      data.primename != addData.primename ||
      data.positionx != addData.positionx ||
      data.positiony != addData.positiony ||
      data.positionz != addData.positionz ||
      data.scalex != addData.scalex ||
      data.scalez != addData.scalez ||
      data.scaley != addData.scaley ||
      data.rotationx != addData.rotationx ||
      data.rotationy != addData.rotationy ||
      data.rotationz != addData.rotationz
    ) {
      setAdd({ ...data, addnew: true });
    }
  };

  const changeLibrary = (data) => {
    if (
      data.builtintype != libraryData.builtintype ||
      data.builtinname != libraryData.builtinname ||
      data.positionx != libraryData.positionx ||
      data.positiony != libraryData.positiony ||
      data.positionz != libraryData.positionz ||
      data.scalex != libraryData.scalex ||
      data.scalez != libraryData.scalez ||
      data.scaley != libraryData.scaley ||
      data.rotationx != libraryData.rotationx ||
      data.rotationy != libraryData.rotationy ||
      data.rotationz != libraryData.rotationz
    ) {
      setBuiltin({ ...data, builtinnew: true });
    }
  };

  const changeExternal = (data) => {
    if (
      data.externaltype != externalData.externaltype ||
      data.externalname != externalData.externalname ||
      data.externalurl != externalData.externalurl ||
      data.positionx != externalData.positionx ||
      data.positiony != externalData.positiony ||
      data.positionz != externalData.positionz ||
      data.scalex != externalData.scalex ||
      data.scalez != externalData.scalez ||
      data.scaley != externalData.scaley ||
      data.rotationx != externalData.rotationx ||
      data.rotationy != externalData.rotationy ||
      data.rotationz != externalData.rotationz

    ) {
      setExternal({ ...data, externalnew: true });
    }
  };

  const changeSettings = (data) => {
    if (
      data.planesize != settingData.planesize ||
      data.gridsize != settingData.gridsize ||
      data.lightR != settingData.lightR ||
      data.lightB != settingData.lightB ||
      data.lightG != settingData.lightG
    ) {
      console.log("a grid change happened");
      setSettings({ ...data, gridChange: true });
    } else {
      console.log("no change needed");
    }
  };

  const changeUpload = (data) => {
    if (data.file.name != fileControl.file.name) {
      console.log("a file add happened");
      setFileControl({ ...data, fileadd: true });
    } else {
      console.log("no need to change");
    }
  };

  const [values, setValues] = React.useState({
    showAdd: false,
    showSettings: false,
    showEdit: false,
    showImport: false,
    showLibrary: false,
  });

  const [assetManagerData, setAssetManager] = React.useState({
    showAssetManager: true,
    switchtoparent: false,
  });

  const handleSettingClick = () => {
    setValues({
      showImport: false,
      showEdit: false,
      showAdd: false,
      showLibrary: false,
      showSettings: !values.showSettings,
    });
  };

  const handleSwitchClick = () => {
    setAssetManager({
      ...assetManagerData,
      switchtoparent: !assetManagerData.switchtoparent,
    });
  };
  const handleAddClick = () => {
    setValues({
      showImport: false,
      showEdit: false,
      showLibrary: false,
      showAdd: !values.showAdd,
      showSettings: false,
    });
  };
  const handleLibraryClick = () => {
    setValues({
      showEdit: false,
      showAdd: false,
      showLibrary: !values.showLibrary,
      showSettings: false,
      showImport: false,
    });
  };
  const handleImportClick = () => {
    setValues({
      showEdit: false,
      showAdd: false,
      showLibrary: false,
      showSettings: false,
      showImport: !values.showImport,
    });
  };

  return (
    <div>
      <div className={classes.root}>
        <div className="Navigation">
          <Fab
            size="small"
            color={values.showSettings ? "primary" : "default"}
            onClick={handleSettingClick}
          >
            <SetIcon aria-label="setting" />
          </Fab>
          <Fab
            size="small"
            aria-label="add"
            color={values.showAdd ? "primary" : "default"}
            onClick={handleAddClick}
          >
            <AddIcon />
          </Fab>
          <Fab
            size="small"
            aria-label="add"
            color={values.showLibrary ? "primary" : "default"}
            onClick={handleLibraryClick}
          >
            <LibraryAddIcon />
          </Fab>
          <Fab
            size="small"
            aria-label="import"
            color={values.showImport ? "primary" : "default"}
            onClick={handleImportClick}
          >
            <FontAwesomeIcon icon={faFileUpload} size="lg" />
          </Fab>

          <Fab size="small" aria-label="download">
            <DownloadIcon />
          </Fab>

          {values.showSettings && (
            <div className="SettingTable">
              <Setting onChange={changeSettings}></Setting>
            </div>
          )}
          {values.showAdd && (
            <div className="AddTable">
              <Add onChange={changeAdd}></Add>
            </div>
          )}
          {values.showImport && (
            <div className="UploadTable">
              <External onChange={changeExternal}></External>
            </div>
          )}
          {values.showLibrary && (
            <div className="LibraryTable">
              <Library onChange={changeLibrary}></Library>
            </div>
          )}
        </div>
      </div>


      {assetManagerData.showAssetManager && (
        <div className="AssetManager">
        <Grid container direction="column" alignItems="left">
          <Grid item>
          <Fab size="small" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab size="small" aria-label="delete">
            <DeleteIcon />
          </Fab>
          </Grid>
          <Grid item>
          {/* <Button onClick={handleSwitchClick} variant="contained" color={assetManagerData.switchtoparent ? "primary" : "default"} >Select with Parent Node</Button> */}
          <FormControl component="fieldset">
            <FormHelperText>Selection Mode</FormHelperText>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={assetManagerData.switchtoparent}
                    onChange={handleSwitchClick}
                    name="selection-mode"
                  />
                }
                label="select root"
              />
            </FormGroup>
          </FormControl>
          </Grid>
      </Grid>
        </div>
      )}


      <div className="BottomView">
        <ViewPort
          settingData={settingData}
          setSettings={setSettings}
          addData={addData}
          setAdd={setAdd}
          fileControl={fileControl}
          setFileControl={setFileControl}
          libraryData={libraryData}
          setBuiltin={setBuiltin}
          externalData={externalData}
          setExternal={setExternal}
          assetManagerData={assetManagerData}
          setAssetManager={setAssetManager}
        />
      </div>
      <div className="Scaleline">
        <Scaleline>{settingData}</Scaleline>
      </div>

    </div>
  );
}
