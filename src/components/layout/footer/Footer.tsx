import React, {FC, useRef} from "react";
import styles from './Footer.module.css'

const Footer: FC = () => {
  const scrollToRef = useRef(0)

  return (
      <div className={styles.Footer} id={'AboutUs'}>
        <div className="col-2" style={{color: "white", textAlign: "center", fontSize: 18}}>
          Почта: recoilsystem@mail.ru

        </div>
        <div className="col-2" style={{color: "white", textAlign: "center", fontSize: 18}}>
          Телефон: +7 (925) 303-38-89
        </div>
        </div>
  )
}
export default Footer
