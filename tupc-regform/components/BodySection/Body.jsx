import styles from "./Body.module.css";

export default function Body() {
  return (
    /*<div className={styles.container}>
      <h2>STUDENT ACCESS MODULE</h2>
      <div className={styles.form}>
        <form action="" method="POST">
          <h3>REGISTRATION FORM</h3>
          <hr />
          <label for="fname">First Name: </label>
          <input type="text" id="fname" name="fname" placeholder="first name"></input><br /><br />
          <label for="lname">Last Name: </label>
          <input type="text" id="lname" name="lname" placeholder="last name"></input><br /><br /> check

          <label for="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="name@gmail.com"></input><br /><br />
          <label for="number">Mobile Number: </label>
          <input type="tel" id="number" name="number" placeholder="0987-654-3210"></input><br /><br /> check
          
          <label for="address">Address: </label>
          <input type="text" id="address" name="address" placeholder="Blk# L# Brgy., City, Prov."></input><br /><br />
          <label>Old TUP Student?</label><br /><br />
          <input type="radio" id="yes" name="status"/>
          <label for="yes">YES</label><br /><br />
          <input type="radio" id="no" name="status"/>
          <label for="no">NO</label><br /><br /> need adjustment

          <label for="reason">Why do you want to study in TUP?</label><br /><br />
          <textarea name="reason" placeholder="I want to study in TUP because..."/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>*/
    
    
    /*<div className={styles.container}>
        <h2>STUDENT ACCESS MODULE</h2>
        <div className={styles.formcontainer}>
            <form>
              <h3>REGISTRATION FORM</h3>
              <hr />
              <ol>
                <li>
                  <label for="fname">First Name: </label><br />
                  <input type="text" id="fname" name="fname"></input>
                </li>
                <li>
                  <label for="lname">Last Name: </label><br />
                  <input type="text" id="lname" name="lname"></input>
                </li>
              </ol>
              <ol>
                <li>
                  <label for="email">Email: </label><br />
                  <input type="email" id="email" name="email"></input>
                </li>
                <li>
                  <label for="number">Mobile Number: </label><br />
                  <input type="tel" id="number" name="number"></input>
                </li>
              </ol>
              <ol>
                <li>
                  <label for="address">Address: </label><br />
                  <input type="text" id="address" name="address"></input>
                </li>
                <li className={styles.radio}>
                  <label>Old TUP Student?</label><br />
                  <input type="radio" id="yes" name="status"/>
                  <label for="yes">YES</label>
                  <input type="radio" id="no" name="status"/>
                  <label for="no">NO</label>
                </li>
              </ol>
              <ol>
                <li className={styles.area}>
                  <label for="reason">Why do you want to study in TUP?</label><br />
                  <textarea name="reason"/>
                </li>
                <li className={styles.button}>
                  <br /><br /><br /><br />
                  <input type="submit" value="Submit"></input> 
                </li>
              </ol>
            </form>
        </div>
    </div>*/


    <div className={styles.container}>
        <h2>STUDENT ACCESS MODULE</h2>
        <div className={styles.formcontainer}>
          <form>
            <h3>REGISTRATION FORM</h3>
            <hr /><br />
            <label for="fname">First Name: </label><br />
            <input type="text" id="fname" name="fname"></input><br /><br />
            <label for="lname">Last Name: </label><br />
            <input type="text" id="lname" name="lname"></input><br /><br />
            <label for="email">Email: </label><br />
            <input type="email" id="email" name="email"></input><br /><br />
            <label for="number">Mobile Number: </label><br />
            <input type="tel" id="number" name="number"></input><br /><br />
            <label for="address">Address: </label><br />
            <input type="text" id="address" name="address"></input><br /><br />
            <label>Old TUP Student? </label>
            <div className={styles.radio}>
              <input type="radio" id="yes" name="status"/>
              <label for="yes">YES</label>
              <input type="radio" id="no" name="status"/>
              <label for="no">NO</label><br /><br />
            </div>
            <label for="reason">Why do you want to study in TUP?</label><br />
            <textarea name="reason"/><br /><br />
            <div className={styles.button}>
              <input type="submit" value="Submit"></input><br />
            </div>
          </form>
        </div>
    </div>
  )
}