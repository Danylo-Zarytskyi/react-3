import styles from './styles.module.css';

function Input() {
  return (
    <div className='App'>
        <div className={styles.cont}>
            <div className={styles.inputLeftEl}>https://swapi.dev/api/</div>
            <input className={styles.inputMidEl} placeholder='people/1'></input>
            <div className={styles.inputRightEl}>request</div>
        </div>
        <span className={styles.span}>Need a hint? try people/1/ or planets/3/ or starships/9/</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span className={styles.result}>Result</span>
    </div>
  );
}

export default Input;
