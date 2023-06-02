import React, { useState, useEffect } from 'react';
import styles from './countdown.module.css'

const Countdown = ({seg,getTime}) => {


  const [time, setTime] = useState(seg); // Tiempo inicial en segundos (600 segundos = 10 minutos)
  getTime(time);
  useEffect(() => {
    
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  

  return (
    <div className={styles.text}>   
      <h2>{minutes.toString().padStart(2, '0')}min.</h2>
      <h2>{seconds.toString().padStart(2, '0')}seg.</h2>
    </div>
  );
};

export default Countdown;