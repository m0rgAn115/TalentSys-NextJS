import Link from 'next/link'
import Head from 'next/head';
import MainApp from '../../components/main';
import styles from './test.module.css';
import { useEffect, useState } from 'react';
import data from './json/data.json';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Test() {
  
  const router = useRouter(); 
  
  const [cheboxValues, setCheboxValues] = useState(0);

  //CHANGING THE PAGE
  let [page, setpage] = useState(1);
  
  const getDataByPage= (page) => {
    const result = data.find(item => item.page === page);
    return result || null;
  }
  
  const dataById = getDataByPage(page);
  ///////////////////////////////////////
  
  //GETTING TIME
  const [sec, setValue] = useState('');
  const getSec = (newValue) => {
    setValue(newValue);
    if(newValue<=0){
      alert('Se ha acabado el tiempo!')
    }
  }
  //##########################################################
  


  //OBTENIENDO VALORES DEL COMPONENTE HIJO
  const [values, setValues] = useState('');
  const handleDataFromChild = (childData) => {
    setValues(childData);
  };

  const [answData, setAnswData] = useState('');
  const handleAnswData = (childData) => {
    setAnswData(childData);
    console.log(childData);

  };

  
  const handleClick = (event) => {
    if(!values){
      alert('Responda todas las preguntas!');
      event.preventDefault();
      
    }else if(page<10){
      setpage(++page);
      const valueCheckbox = 1;
      setCheboxValues(valueCheckbox);
      console.log(answData);
    }else{

    }
  }
  
  //Sending the information
  //Sending the information



  return (
    <>
      <Head>
        <title>Firs Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

    <MainApp getTime={getSec} segs={3600} page={page} data={dataById} onData={handleDataFromChild} onAnswSumData={handleAnswData} valueCheckbox={cheboxValues}/>
    
    <div className={styles.container}>
      <div className={styles.divCenter}>
        
        <button className={styles.button} onClick={handleClick}>Continue</button>
        
      </div>
      
    </div>
    </>   
    
  )
}

{/* <Link href={`./QuestionPage${p+1}?secs=${sec}&Apoints=${answData[0]}&Bpoints=${answData[1]}&Cpoints=${answData[2]}`} >

</Link> */}