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
  } );

  const changeSettings = data => {
    if (data.planesize != settingData.planesize || data.gridsize != settingData.gridsize){
      console.log('a grid change happened')
      setSettings({ planesize: Number(data.planesize), gridsize: Number(data.gridsize), gridChange: true})
  }    else{
    console.log('no need for a grid change')
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