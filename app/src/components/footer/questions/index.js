import styles from './styles.module.css';

function Quesitons() {
  return (
    <div className='App'>
        <div className={styles.cont}>
            <div className={styles.LeftEl}>
                <span className={styles.title}>What is this?</span>
                <br></br>
                <span className={styles.content}>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified
                <br></br> 
                and programmatically-accessible data source for all the data from the
                <br></br>
                Star Wars canon universe!
                <br></br>
                <br></br>
We've taken all the rich contextual stuff from the universe and formatted
                <br></br> 
                into something easier to consume with software. Then we went and 
                <br></br>
                stuck an API on the front so you can access it all!</span>
            </div>
            <div className={styles.MidEl}>
                <span className={styles.title}>How can I use it?</span>
                <br></br>
                <span className={styles.content}>All the data is accessible through our HTTP web API. Consult our documentation if you'd like to
                <br></br>
                get started.
                <br></br>
                <br></br>
Helper libraries for popular programming languages are also provided so you can consume swapi 
                <br></br>
in your favourite programming language, in a style that suits you.</span>
            </div>
            <div className={styles.RightEl}>
                <span className={styles.title}>What happened with old swapi.co?</span>
                <br></br>
                <span className={styles.content}>swapi.co is not supported and maintained anymore. But since so many 
                <br></br>
                projects and tutorials used it as their educational playground, this is an
                <br></br>
                 "unofficial" branch.
                 <br></br>
                 <br></br>
This project is open source and you can contribute on GitHub.</span>
            </div>
        </div>
    </div>
  );
}

export default Quesitons;
