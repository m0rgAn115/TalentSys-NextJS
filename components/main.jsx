import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import styles from './main.module.css'

import {QuestionApp} from './QuestionApp.jsx'
import { NavBarApp } from './NavBarApp.jsx';


export default function MainAPP ({getTime,segs,page,data,onData,onAnswSumData,valueCheckbox})  {

  let quest_num_1 = (5*page)-4;
  let quest_num_2 = (5*page)-3;
  let quest_num_3 = (5*page)-2;
  let quest_num_4 = (5*page)-1;
  let quest_num_5 = (5*page);

  //QUESTIONS DATA
  //QUESTION 1
  const questionStatement1 = data.page_Info.question_1.questionStatement;
  const answerA1 = data.page_Info.question_1.groupA_Answer
  const answerB1 = data.page_Info.question_1.groupB_Answer
  const answerC1 = data.page_Info.question_1.groupC_Answer


  //QUESTION 2

  const questionStatement2 = data.page_Info.question_2.questionStatement;
  const answerA2 = data.page_Info.question_2.groupA_Answer
  const answerB2 = data.page_Info.question_2.groupB_Answer
  const answerC2 = data.page_Info.question_2.groupC_Answer


  //QUESTION 3

  const questionStatement3 = data.page_Info.question_3.questionStatement;
  const answerA3 = data.page_Info.question_3.groupA_Answer
  const answerB3 = data.page_Info.question_3.groupB_Answer
  const answerC3 = data.page_Info.question_3.groupC_Answer


  //QUESTION 4
  const questionStatement4 = data.page_Info.question_4.questionStatement;
  const answerA4 = data.page_Info.question_4.groupA_Answer
  const answerB4 = data.page_Info.question_4.groupB_Answer
  const answerC4 = data.page_Info.question_4.groupC_Answer


  //QUESTION 5
  const questionStatement5 = data.page_Info.question_5.questionStatement;
  const answerA5 = data.page_Info.question_5.groupA_Answer
  const answerB5 = data.page_Info.question_5.groupB_Answer
  const answerC5 = data.page_Info.question_5.groupC_Answer



    //VERIFICANDO QUE TODOS LOS CHECHBOX HAYAN SIDO PRECIONADOS
    const [StateQuestion1, setStateQuestion1] = useState(''); 
    const handleDataFromQuestion1 = (childData) => {
      setStateQuestion1(childData);
    };

    const [StateQuestion2, setStateQuestion2] = useState('');
    const handleDataFromQuestion2 = (childData) => {
      setStateQuestion2(childData);
    };

    const [StateQuestion3, setStateQuestion3] = useState('');
    const handleDataFromQuestion3 = (childData) => {
      setStateQuestion3(childData);
    };

    const [StateQuestion4, setStateQuestion4] = useState('');
    const handleDataFromQuestion4 = (childData) => {
      setStateQuestion4(childData);
    };

    const [StateQuestion5, setStateQuestion5] = useState('');
    const handleDataFromQuestion5 = (childData) => {
      setStateQuestion5(childData);
    };

    useEffect(() => {
      onData(StateQuestion1 && StateQuestion2 && StateQuestion3 && StateQuestion4 && StateQuestion5);
    }, [StateQuestion1, StateQuestion2, StateQuestion3, StateQuestion4, StateQuestion5]);


    const [Q1Value, setQ1Value] = useState(''); 
    const handleQ1Value = (childData) => {
      setQ1Value(childData);
      
    };

    const [Q2Value, setQ2Value] = useState(''); 
    const handleQ2Value = (childData) => {
      setQ2Value(childData);
    };

    const [Q3Value, setQ3Value] = useState(''); 
    const handleQ3Value = (childData) => {
      setQ3Value(childData);
    };

    const [Q4Value, setQ4Value] = useState(''); 
    const handleQ4Value = (childData) => {
      setQ4Value(childData);
    };

    const [Q5Value, setQ5Value] = useState(''); 
    const handleQ5Value = (childData) => {
      setQ5Value(childData);
    };





    
    function getGroupSum(){
      const sumA = (Q1Value[0]+Q2Value[0]+Q3Value[0]+Q4Value[0]+Q5Value[0])*data.GA_Value;
      const sumB = (Q1Value[1]+Q2Value[1]+Q3Value[1]+Q4Value[1]+Q5Value[1])*data.GB_Value;
      const sumC = (Q1Value[2]+Q2Value[2]+Q3Value[2]+Q4Value[2]+Q5Value[2])*data.GC_Value; //data.page_Info.question_1.groupC_Value;
      
       return [sumA,sumB,sumC];
     }

     
     useEffect(() => {
      onAnswSumData(getGroupSum());
    }, [Q1Value, Q2Value, Q3Value, Q4Value, Q5Value]);
     
  return (
    <>
    <NavBarApp getTime={getTime} segs={segs}/>
    
    <div className={styles.questionContainer}>
    <QuestionApp
     questionNumber={quest_num_1} question={questionStatement1} data={data} onValue={handleQ1Value}
     answer1={answerA1} answer2={answerB1} answer3={answerC1} onData={handleDataFromQuestion1} valueCheckbox={valueCheckbox}
     />  
    
    <QuestionApp
     questionNumber={quest_num_2} question={questionStatement2} data={data} onValue={handleQ2Value}
     answer1={answerA2} answer2={answerB2} answer3={answerC2} onData={handleDataFromQuestion2} valueCheckbox={valueCheckbox}
     />
    
    <QuestionApp
     questionNumber={quest_num_3} question={questionStatement3} data={data} onValue={handleQ3Value}
     answer1={answerA3} answer2={answerB3} answer3={answerC3} onData={handleDataFromQuestion3} valueCheckbox={valueCheckbox}
     />
    
    <QuestionApp
     questionNumber={quest_num_4} question={questionStatement4} data={data} onValue={handleQ4Value}
     answer1={answerA4} answer2={answerB4} answer3={answerC4} onData={handleDataFromQuestion4} valueCheckbox={valueCheckbox}
     />
    
    <QuestionApp
     questionNumber={quest_num_5} question={questionStatement5} data={data} onValue={handleQ5Value}
     answer1={answerA5} answer2={answerB5} answer3={answerC5} onData={handleDataFromQuestion5} valueCheckbox={valueCheckbox}
     />
    </div>
    </>   
  )
}











