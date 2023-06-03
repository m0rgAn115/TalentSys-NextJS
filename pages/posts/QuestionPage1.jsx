import Link from 'next/link'
import Head from 'next/head';
import MainApp from '../../components/main';
import styles from './test.module.css';
import { useEffect, useState } from 'react';
import data from './json/data.json';

export default function Test() {
  
  
  
  //CHANGING THE PAGE
  const p = 1;

  const getDataByPage= (page) => {
    const result = data.find(item => item.page === page);
    return result || null;
  }
  
  const dataById = getDataByPage(p);
  ///////////////////////////////////////
  

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

      

    <MainApp getTime={getSec} segs={3600} page={p} data={dataById}/>
    

    <h1>{value}</h1>
    <div className={styles.container}>
      <div className={styles.divCenter}>
        <Link href={`./QuestionPage${p+1}?value=${value}`} >
        <button className={styles.button} >Continue</button>
        </Link>
      </div>
      
    </div>
    
   
    
    
    </>
    


      
    
  )
}