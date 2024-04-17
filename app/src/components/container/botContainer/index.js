import styles from './styles.module.css';

function BotCont() {
  return (
    <div className="App">
        <div className={styles.span}>
            All the Star Wars data you've ever wanted:
            <br></br>
            <br></br>
            Planets, Spaceships, Vehicles, People, Films and Species
            <br></br>
            <br></br>
            From all SEVEN Star Wars films
            <br></br>
            <br></br>
            Now with The Force Awakens data!
        </div>
        <div className={styles.line}></div>
    </div>
  );
}

export default BotCont;
