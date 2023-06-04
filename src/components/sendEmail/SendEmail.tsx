import React, {FC, SyntheticEvent, useState} from "react";
import styles from './SendEmail.module.css'
import Backdrop from "../pages/home/backdrop/Backdrop";
import emailjs from 'emailjs-com';

const closeItem =
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L16 16M16 1L1 16" stroke="#0D0C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

type IAlert = {
  confirm: any,
}

const SendEmail: FC<IAlert> = (alert) => {


  const sendEmail = async(e: any) =>  {
    e.preventDefault()

    emailjs.sendForm('service_lvjg93n', 'template_kfnc2gf', e.target, 'gYs3cF-Zhh63W1NrL')
        .then((result) => {
        }, (error) => {
          console.log(error.text);
        });
    alert.confirm()

  }

  return (
      <div>
        <Backdrop onClick={alert.confirm}/>
        <div className={styles.Alert}>
          <div className={styles.Cross} onClick={alert.confirm}>{closeItem}</div>

          <div className={styles.Title}>Продукт в разработке</div>

          <form onSubmit={sendEmail}>
            <div className="mb-3" style={{marginTop: 15}}>
              <label htmlFor="exampleInputEmail1" className="form-label">Оставьте свои контакты для оповещения о готовности</label>

              <div className={styles.Label}>Ваше имя:</div>
              <input type="text" name='name' className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"/>

              <div className={styles.Label}>Ваша почта:</div>
              <input type="email" name='email' className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"/>

            </div>
            <button type="submit" style={{width: 150}} className="btn btn-success">Оставить почту </button>
          </form>

        </div>
      </div>
  )
}
export default SendEmail
