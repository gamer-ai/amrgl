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

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   // '& > *': {
//   //   //   margin: theme.spacing(1),
//   //   // },
//   // },
//   // extendedIcon: {
//   //   marginRight: theme.spacing(2),
//   // },
// }));

export default function FloatingActionButtons() {
  // const classes = useStyles();
  const eventhandler = data => console.log(data);
  const [values, setValues] = React.useState({
    showAdd: false,
    showSettings: false,
    showEdit: false,
  });

  const handleSettingClick = () => {
    setValues({ showEdit: false, showAdd: false, showSettings: !values.showSettings });
  };

  return (
    
    <div >
      <div className = "Navigation">
      <Fab size="small" onClick={handleSettingClick} >
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
      {values.showSettings && <div className ="SettingTable"><Setting onChange={eventhandler}></Setting></div>}
    </div>
      <div className = "BottomView">
      <ViewPort></ViewPort>
      </div>
    </div>

  );
}