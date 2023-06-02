import { AnswerCheckboxApp } from './AnswerCheckboxApp';
import { AnswerContainerApp } from './AnswerContainerApp';
import styles from './questionStyles.module.css';

export const QuestionApp = ({question,questionNumber,answer1,answer2,answer3}) => {
  const idQuestionContainer = questionNumber+'_'+question.slice(0,1);


  return ( 
    <div className={styles.questionSpace} id={idQuestionContainer}>
      <h3 className={styles.questionTitle}>{questionNumber}. {'\t\t\t'} {question}</h3>
      <AnswerContainerApp answer1={answer1}  answer2={answer2} answer3={answer3} questionNumber={questionNumber} idquestioncontainer={idQuestionContainer}/>     
    </div>
  )
}
