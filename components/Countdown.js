import React, { useState, useEffect, memo } from 'react';
import styles from './countdown.module.css';

const Countdown = ({ seg, getTime }) => {
  const [time, setTime] = useState(seg);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  useEffect(() => {
    getTime(time);
  }, [getTime, time]); 

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={styles.text}>
      <h2>{minutes.toString().padStart(2, '0')}min.</h2>
      <h2>{seconds.toString().padStart(2, '0')}seg.</h2>
    </div>
  );
};

export default React.memo(Countdown);
