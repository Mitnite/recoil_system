import React, {FC, SyntheticEvent, useState} from "react";
import styles from './Alert.module.css'
import Backdrop from "./backdrop/Backdrop";

const closeItem =
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L16 16M16 1L1 16" stroke="#0D0C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

type IAlert = {
  confirm: any,
  refuse: any
}

const Alert: FC<IAlert> = (alert) => {

  const [email, setEmail] = useState('')

  const EmailHandler = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('ПОЧТА: ' + email)
    alert.confirm()
  }
  return (
      <div>
        <Backdrop onClick={EmailHandler}/>
        <div className={styles.Alert}>
          <div className={styles.Cross} onClick={alert.refuse}>{closeItem}</div>

          <div className={styles.Title}>К сожалению не готово</div>

          <form onSubmit={EmailHandler}>
            <div className="mb-3" style={{marginTop: 15}}>
              <label htmlFor="exampleInputEmail1" className="form-label">Вы можете оставить свою почту, и тогда мы
                оповестим Вас</label>
              <input value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" style={{width: 150}} className="btn btn-success">Оставить почту </button>
          </form>

        </div>
      </div>
  )
}
export default Alert
