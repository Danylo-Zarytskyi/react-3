import styles from './styles.module.css';
import svg from './post.svg';

function Header() {
  return (
    <div className="App">
      <div className={styles.header}>
         <img src={svg} className={styles.svg} alt="svg"/>
         <div className={styles.tools}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.doccumentation}>Doccumentation</div>
         </div>
      </div>
    </div>
  );
}

export default Header;
