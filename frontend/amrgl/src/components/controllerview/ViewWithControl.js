import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SetIcon from '@material-ui/icons/TuneTwoTone';
import DownloadIcon from '@material-ui/icons/GetAppRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Setting from './settingtable/SettingComponent';
import Upload from './uploadtable/UploadComponent';
import ViewPort from './viewer/ViewPortComponent';
import './ViewWithControl.css'
import Scaleline from './viewer/ScalelineComponent';
import Add from './addtable/AddComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();


  const [settingData, setSettings] = React.useState( {
    planesize: 6000,
    gridsize: 50,
    gridChange: false,
    confirmed: false,
    lightR: 0.45,
    lightG: 0.45,
    lightB: 0.45,
  } );
  
  const [addData, setAdd] = React.useState({
    primetype: '',
    primename: '',
    addnew: false,
    positionx: null,
    positiony: null,
    positionz: null,
    scalex: null,
    scaley: null,
    scalez: null,
  });

  const changeAdd = data => {
    if (data.primetype != addData.primetype || data.primename != addData.primename || data.positionx != addData.positionx || data.positiony != addData.positiony || data.positionz != addData.positionz || data.scalex != addData.scalex || data.scalez != addData.scalez || data.scaley != addData.scaley){
    // if (data.gridChange){
      setAdd({ ...data, addnew:true})
  } 

  };


  const changeSettings = data => {
    if ((data.planesize != settingData.planesize || data.gridsize != settingData.gridsize || data.lightR != settingData.lightR || data.lightB != settingData.lightB || data.lightG != settingData.lightG)){
    // if (data.gridChange){
      console.log('a grid change happened')
      setSettings({ ...data, gridChange: true})
  }    
    else{
    console.log('no change needed')
    }

  };
  const [values, setValues] = React.useState({
    showAdd: false,
    showSettings: false,
    showEdit: false,
    showImport: false,
  });
 

  const handleSettingClick = () => {
    setValues({ showImport: false, showEdit: false, showAdd: false, showSettings: !values.showSettings });
  };
  const handleAddClick = () => {
    setValues({ showImport: false, showEdit: false, showAdd: !values.showAdd, showSettings: false });
  };

  const handleImportClick = () => {
    setValues({ showEdit: false, showAdd: false, showSettings: false, showImport: !values.showImport });
  };
  return (
    
    <div>
      <div className = {classes.root}>
      <div className = "Navigation">
      <Fab  size="small"  color = {values.showSettings ? "primary" : "default" } onClick={handleSettingClick} >
        <SetIcon  aria-label="setting"/>
      </Fab>
      <Fab size="small"  aria-label="add" color = {values.showAdd ? "primary" : "default" } onClick={handleAddClick}>
        <AddIcon />
      </Fab>
      <Fab size="small" aria-label="import" color = {values.showImport ? "primary" : "default" } onClick={handleImportClick}>
        <FontAwesomeIcon icon={faFileUpload} size="lg"/>
      </Fab>
      <Fab size="small"  aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab size="small"  aria-label="delete">
        <DeleteIcon />
      </Fab>
      <Fab size="small" aria-label="download">
        <DownloadIcon />
      </Fab>
      {values.showSettings && <div className ="SettingTable"><Setting onChange={changeSettings}></Setting></div>}
      {values.showAdd && <div className ="AddTable"><Add onChange={changeAdd} ></Add></div>}
      {values.showImport && <div className ="UploadTable"><Upload></Upload></div>}
      </div>
    </div>
      <div className = "BottomView">
      <ViewPort settingData = {settingData} setSettings = {setSettings} addData = {addData} setAdd = {setAdd}/>
      </div>
      <div className ="Scaleline"><Scaleline>{settingData}</Scaleline></div>
    </div>

  );
}