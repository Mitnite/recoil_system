import React, {FC} from "react";
import styles from './Header.module.css'
import {useNavigate} from "react-router-dom";
import logo from './logo.svg'
import title from './title.svg'

const Header: FC = () => {

  let navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(link)
  }

  return (
      <header className={styles.Header}>
        <div className={styles.Container}>

          <div className={styles.Logo} onClick={() => handleClick('/')}>
            <img src={logo} alt="" style={{height: 50, width: 50}}/>
            <div>ReCoil System</div>
          </div>

          <div className={styles.Contacts}>
            <div onClick={() => handleClick('/about-us')}>О нас</div>
            <div onClick={() => handleClick('/contacts')}>Связаться с нами</div>

          </div>
        </div>
      </header>
  )
}
export default Header
