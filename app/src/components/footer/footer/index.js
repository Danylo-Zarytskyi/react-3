import styles from './styles.module.css';
import svg from './logo.svg';

function Footer() {
  return (
    <div className='App'>
      <div className={styles.line}></div>
        <div className={styles.cont}>
                <div className={styles.footer}>
                  <span className={styles.span}>Created by Paul Hallett Maintained by Juriy Bura ©2024</span>
                  <img src={svg} className={styles.svg}></img>
                </div>
        </div>
    </div>
  );
}

export default Footer;
