
import styles from './answerCheckboxStyles.module.css';

export const AnswerCheckboxApp = ({answer,isChecked,onChange,getId,id}) => { //if there is another question with the same answer, the questionNumber creates the diference for the id

  let state=1;
  
  const getIdentif = () => getId(id);

  return (
    <div className={styles.containerCheckbox} >
      <form className={styles.con}>
        <input id={id} type='checkbox' checked={isChecked} onClick={getIdentif} onChange={onChange}  />
        <label htmlFor={id}> {answer}</label>
      </form>
        
    </div>
  )
}
