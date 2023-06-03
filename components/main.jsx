import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './main.module.css'

import {QuestionApp} from './QuestionApp.jsx'
import { NavBarApp } from './NavBarApp.jsx';


export default function MainAPP ({getTime,segs,page,data})  {

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




  
  const pregunta = 'Estoy dispuesto a contestar cada pregunta tan sinceramente como me sea posible.';
  return (
    <>
    <NavBarApp getTime={getTime} segs={segs}/>
    
    <div className={styles.questionContainer}>
    <QuestionApp
     questionNumber={quest_num_1} question={questionStatement1}
     answer1={answerA1} answer2={answerB1} answer3={answerC1} 
     />  
    
    <QuestionApp
     questionNumber={quest_num_2} question={questionStatement2}
     answer1={answerA2} answer2={answerB2} answer3={answerC2}
     />
    
    <QuestionApp
     questionNumber={quest_num_3} question={questionStatement3}
     answer1={answerA3} answer2={answerB3} answer3={answerC3}
     />
    
    <QuestionApp
     questionNumber={quest_num_4} question={questionStatement4}
     answer1={answerA4} answer2={answerB4} answer3={answerC4}
     />
    
    <QuestionApp
     questionNumber={quest_num_5} question={questionStatement5}
     answer1={answerA5} answer2={answerB5} answer3={answerC5}
     />
    </div>
    </>   
  )
}











