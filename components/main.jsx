import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './main.module.css'

import {QuestionApp} from './QuestionApp.jsx'
import { NavBarApp } from './NavBarApp.jsx';


export default function MainAPP ({getTime,segs,page})  {
  let questionNumber1,questionNumber2,questionNumber3,questionNumber4,questionNumber5;

  let quest_num_1 = (5*page)-4;
  let quest_num_2 = (5*page)-3;
  let quest_num_3 = (5*page)-2;
  let quest_num_4 = (5*page)-1;
  let quest_num_5 = (5*page);




  
  const pregunta = 'Estoy dispuesto a contestar cada pregunta tan sinceramente como me sea posible.';
  return (
    <>
    <NavBarApp getTime={getTime} segs={segs}/>
    
    <div className={styles.questionContainer}>
    <QuestionApp
     questionNumber={quest_num_1} question={pregunta}
     answer1={'Si'} answer2={'En duda'} answer3={'No'} 
     />  
    
    <QuestionApp
     questionNumber={quest_num_2} question='Prefiero tener una casa en: '
     answer1={'En una zona poblada'} answer2={'Intermedio'} answer3={'Aislada en un bosque'}
     />
    
    <QuestionApp
     questionNumber={quest_num_3} question='Yo tengo la energia suficiente para enfrentarme a mis dificultades. '
     answer1={'Siempre'} answer2={'Generalmente'} answer3={'Pocas veces'}
     />
    
    <QuestionApp
     questionNumber={quest_num_4} question='Me siento un poco ante animales salvajes aunque esten enjaulados. '
     answer1={'Si'} answer2={'Indeciso'} answer3={'No'}
     />
    
    <QuestionApp
     questionNumber={quest_num_5} question='Evito criticar a las personas y a sus ideas. ' 
     answer1={'Siempre'} answer2={'Aveces'} answer3={'Nunca'}
     />
    </div>
    </>   
  )
}











