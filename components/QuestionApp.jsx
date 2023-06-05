import { useState } from 'react';
import { AnswerCheckboxApp } from './AnswerCheckboxApp';
import { AnswerContainerApp } from './AnswerContainerApp';
import styles from './questionStyles.module.css';

export const QuestionApp = ({question,questionNumber,answer1,answer2,answer3,onData,data,onValue,checkboxRef,valueCheckbox}) => {
  const idQuestionContainer = questionNumber+'_'+question.slice(0,1);

  const [lastAnswer, setlastAnswer] = useState(''); 
    const handleDataLastAnswer = (childData) => {
      setlastAnswer(childData);
      onValue(getValue(childData));
    };

    function getValue(id){
      switch(id){
        case 'checkbox1':  return [1,0,0];
        case 'checkbox2':  return [0,1,0];
        case 'checkbox3':  return [0,0,1];
        default: return 0;
      }
    }


    // const [lastAnswerQ2, setlastAnswerQ2] = useState(''); 
    // const handleDataLastAnswerQ2 = (childData) => {
    //   setlastAnswerQ2(childData);
    // };

    // const [lastAnswerQ3, setlastAnswerQ3] = useState(''); 
    // const handleDataLastAnswerQ3 = (childData) => {
    //   setlastAnswerQ32(childData);
    // };

    // const [lastAnswerQ4, setlastAnswerQ4] = useState(''); 
    // const handleDataLastAnswerQ4 = (childData) => {
    //   setlastAnswerQ4(childData);
    // };

    // const [lastAnswerQ5, setlastAnswerQ5] = useState(''); 
    // const handleDataLastAnswerQ5 = (childData) => {
    //   setlastAnswerQ5(childData);
    // };

  return ( 
    <div className={styles.questionSpace} id={idQuestionContainer}>
      <h3 className={styles.questionTitle}>{questionNumber}. {'\t\t\t'} {question}</h3>
      <AnswerContainerApp answer1={answer1}  answer2={answer2} answer3={answer3} lastAnswer={handleDataLastAnswer} ref={checkboxRef}
       questionNumber={questionNumber} idquestioncontainer={idQuestionContainer} onData={onData} valueCheckbox={valueCheckbox}/>     
    </div>
  )
}
