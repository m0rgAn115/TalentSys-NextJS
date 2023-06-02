import Link from 'next/link'
import Head from 'next/head';
import MainApp from '../../components/main';
import styles from './test.module.css';
import { useState } from 'react';
export default function Test() {
  
  const [value, setValue] = useState('');
  
  const getSec = (newValue) => {
    setValue(newValue);
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  
  const handleClick = () => {
    return 
  }
  return (
    <>
      <Head>
        <title>Firs Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      

    <MainApp getTime={getSec} segs={3600} page={1}/>
    

    <h1>{value}</h1>
    <div className={styles.container}>
      <div className={styles.divCenter}>
        <Link href={`./QuestionPage2?value=${value}`} >
        <button className={styles.button}>Continue</button>
        </Link>
      </div>
      
    </div>
    
   
    
    
    </>
    


      
    
  )
}