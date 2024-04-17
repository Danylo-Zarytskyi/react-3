import styles from './styles.module.css';
import BotCont from '../botContainer';

function TopCont() {
  return (
    <div className="App">
      <div className={styles.topCont}>
        <div className={styles.contentCont}>
            <span className={styles.swapiTop}>SWAPI</span>
            <br></br>
            <span className={styles.swapiMid}>The Star Wars API</span>
            <br></br>
            <span className={styles.swapiBot}>(What happened to swapi.co?)</span>
        </div>
  
      </div>
    </div>
  );
}

export default TopCont;
