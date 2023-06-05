import Link from 'next/link'
import Head from 'next/head';
import MainApp from '../../components/main';
import styles from './test.module.css';
import { useEffect, useState } from 'react';
import data from './json/data.json';
import { useRouter } from 'next/router';

export default function Test() {
  
  const router = useRouter();
  const { secs, Apoints,Bpoints,Cpoints } = router.query;

  
  console.log(Apoints,Bpoints,Cpoints);
  
  
  //CHANGING THE PAGE
  const p = 5;
  const getDataByPage= (page) => {
    const result = data.find(item => item.page === page);
    return result || null;
  }
  
  const dataById = getDataByPage(p);
  ///////////////////////////////////////
  
  //GETTING TIME
  const [secRemain, setSecRemain] = useState('');
  const getSec = (newValue) => {
    setSecRemain(newValue);
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
      
    }else{

      answData[0]+=parseInt(Apoints);
      answData[1]+=parseInt(Bpoints);
      answData[2]+=parseInt(Cpoints);

      const href = `./QuestionPage${p+1}?secs=${secs}&Apoints=${answData[0]}&Bpoints=${answData[1]}&Cpoints=${answData[2]}`;
      router.push(href);

      alert(answData);
    }
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

    <MainApp getTime={getSec} segs={secs} page={p} data={dataById} onData={handleDataFromChild} onAnswSumData={handleAnswData}/>
    
    <div className={styles.container}>
      <div className={styles.divCenter}>
        <Link href={`./QuestionPage${p+1}?secs=${secs}&Apoints=${answData[0]}&Bpoints=${answData[1]}&Cpoints=${answData[2]}`} >
        <button className={styles.button} onClick={handleClick}>Continue</button>
        </Link>
      </div>
      
    </div>
    </>   
    
  )
}

      