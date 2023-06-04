import React, {FC} from "react";
import styles from './Header.module.css'
import logo from './logo.svg'

const Header: FC = () => {

  return (
      <header className={styles.Header}>
        <div className={styles.Container}>

          <div  className={styles.Logo} onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="" style={{height: 50, width: 50}}/>
            <div className={styles.Contacts} style={{marginLeft: 15}}>ReCoil System</div>
          </div>

          <div className={styles.Contacts}>
            <div onClick={() => window.scrollTo(1000, 1000)} style={{cursor: "pointer"}}>О нас</div>
            <div onClick={() => window.scrollTo(1000, 1000)} style={{cursor: "pointer"}} >Связаться с нами</div>

          </div>
        </div>
      </header>
  )
}
export default Header
