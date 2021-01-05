import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  window.open("https://www.muyangguo.xyz/", "_blank");
}


export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Prototype V1</Typography>
      <Link color="inherit" href="https://www.muyangguo.xyz" onClick={handleClick}>@Muyang Guo
      </Link>
    </Breadcrumbs>
  );
}