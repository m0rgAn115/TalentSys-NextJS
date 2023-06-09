import { useEffect, useImperativeHandle, useState } from "react";
import { AnswerCheckboxApp } from "./AnswerCheckboxApp"
import styles from './answerContainer.module.css';

// import PropTypes from 'prop-types';

export const AnswerContainerApp = ( {answer1,answer2,answer3,questionNumber,idquestioncontainer,onData,lastAnswer,valueCheckbox}) => {

  

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });
  
  //CHANGING THE STATE OF THE CHECKBOX WHEN THE NUM OF PAGE CHANGES
  useEffect(() => {
    if (valueCheckbox === 1) {
      setCheckboxes(prevCheckboxes => ({
        ...prevCheckboxes,
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
      }));

      const questionContainer = document.getElementById(idquestioncontainer);
      if (questionContainer) {
        questionContainer.style.backgroundColor = '#FFFFFF';
      }
    }
  }, [valueCheckbox, idquestioncontainer]);
  

  const handleCheckboxChange = (id) => (event) => {
    const questionContainer = document.getElementById(idquestioncontainer);
    console.log(id);
    lastAnswer(id);
    

      switch(id){
        case 'checkbox1': checkboxes.checkbox2=false ; checkboxes.checkbox3=false;break;
        case 'checkbox2': checkboxes.checkbox1=false ; checkboxes.checkbox3=false;break;
        case 'checkbox3': checkboxes.checkbox1=false ; checkboxes.checkbox2=false; break;
        default: checkboxes.checkbox1=false ; checkboxes.checkbox2=false; checkboxes.checkbox3=false;
      }
      onData(!checkboxes.checkbox1 && !checkboxes.checkbox2 && !checkboxes.checkbox3);
      if(!checkboxes.checkbox1 && !checkboxes.checkbox2 && !checkboxes.checkbox3){
         questionContainer.style.backgroundColor = '#8fc4d8';  
     }else{
      questionContainer.style.backgroundColor = '#FFFFFF';
      }
    
      

      
        
      const { checked } = event.target;
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [id]: checked
    }));
    
  };

  
    
  

  const id1 = questionNumber+'_1';
  const id2 = questionNumber+'_2';
  const id3 = questionNumber+'_3';



  const getId=(val) =>{
    return val;
  }


  return (
    <div className={styles.Container}>
        <AnswerCheckboxApp isChecked={checkboxes.checkbox1} onChange={handleCheckboxChange('checkbox1')} id={id1} getId = {getId}
        answer={answer1} idQuestionContainer={idquestioncontainer} />
        <AnswerCheckboxApp isChecked={checkboxes.checkbox2} onChange={handleCheckboxChange('checkbox2')} id={id2} getId = {getId}
         answer={answer2}  idQuestionContainer={idquestioncontainer}/>
        <AnswerCheckboxApp isChecked={checkboxes.checkbox3} onChange={handleCheckboxChange('checkbox3')} id={id3} getId = {getId}
         answer={answer3} idQuestionContainer={idquestioncontainer}/>
    </div>
  )
}

// AnswerContainerApp.propTypes = {
//     answer1: PropTypes.string,
//     answer2: PropTypes.string,
//     answer3: PropTypes.string,
// }

// AnswerContainerApp.defaultProps = {
//     answer1: 'Sin Respuesta',
//     answer2: 'Sin Respuesta',
//     answer3: 'Sin Respuesta',
// }
