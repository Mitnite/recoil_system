import React, {FC, useRef} from "react";
import styles from './Footer.module.css'

const Footer: FC = () => {
  const scrollToRef = useRef(0)

  return (
      <div className={`${styles.Footer} `} id={'AboutUs'}>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className="col-md-5">
              Почта: recoilsystem@mail.ru

            </div>

            <div className="col-sm-8 col-md-5">
              Телефон: +7 (925) 303-38-89
            </div>
          </div>
        </div>
      </div>
  )
}
export default Footer
