import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SetIcon from '@material-ui/icons/TuneTwoTone';
import DownloadIcon from '@material-ui/icons/GetAppRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Setting from './settingtable/SettingComponent';
import ViewPort from './viewer/ViewPortComponent';
import './ViewWithControl.css'
import Scaleline from './viewer/ScalelineComponent';

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
    colorChange: false,
  } );
  

  const changeSettings = data => {
    if (data.planesize != settingData.planesize || data.gridsize != settingData.gridsize){
    // if (data.gridChange){
      console.log('a grid change happened')
      setSettings({ ...data, gridChange: true, colorChange: false})
  }    
    else if (data.lightR != settingData.lightR || data.lightB != settingData.lightB || data.lightG != settingData.lightG){
    // else if (data.colorChange){
    console.log('a scene color change happened')
      setSettings({...data, colorChange: true, gridChange: false})
    }
    else{
      console.log('no change needed')
    }

  };
  const [values, setValues] = React.useState({
    showAdd: false,
    showSettings: false,
    showEdit: false,
  });
 

  const handleSettingClick = () => {
    setValues({ showEdit: false, showAdd: false, showSettings: !values.showSettings });
  };

  return (
    
    <div>
      <div className = {classes.root}>
      <div className = "Navigation">
      <Fab  size="small"  color = {values.showSettings ? "primary" : "default" } onClick={handleSettingClick} >
        <SetIcon  aria-label="setting"/>
      </Fab>
      <Fab size="small"  aria-label="add">
        <AddIcon />
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
      </div>
    </div>
      <div className = "BottomView">
      <ViewPort settingData = {settingData} setSettings = {setSettings}/>
      </div>
      <div className ="Scaleline"><Scaleline>{settingData}</Scaleline></div>
    </div>

  );
}