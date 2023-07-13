import React from 'react'
import { useState } from 'react';

function SideBar() {

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
    </>
  )
}


export default withAuth(SideBar)