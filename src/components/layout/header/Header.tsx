import React, {FC} from "react";
import styles from './Header.module.css'
import logo from './logo.svg'

const Header: FC = () => {

  return (
      <header className={styles.Header}>
        <div className={styles.Container}>

          <div className={styles.Logo} >
            <img src={logo} alt="" style={{height: 50, width: 50}}/>
            <div className={styles.Contacts} style={{marginLeft: 15}}>ReCoil System</div>
          </div>

          <div className={styles.Contacts}>
            <a href={'#footer'} >О нас</a>
            <a href={'#footer'} >Связаться с нами</a>

          </div>
        </div>
      </header>
  )
}
export default Header
