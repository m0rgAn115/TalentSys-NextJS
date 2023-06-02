import React, { useState } from 'react'
import Countdown from './Countdown';
// import logo from '../assets/Logo_talent_sys.svg';

import styles from './navBarStyles.module.css'
export const NavBarApp = ({getTime,segs}) => {


  return (
    
    <div className={styles.navigationBar}>
      <div className={styles.timeContainer}>
      <h2 className={styles.h2}>Tiempo Restante: </h2>
      <Countdown seg={segs} getTime={getTime}/>
      </div>
      
      
    </div>
  )
}
