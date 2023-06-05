import React, {FC, useState} from "react";
import SendEmail from "../../sendEmail/SendEmail";
import ReCoil from '../../../image/ReCoil.png'
import Front from '../../../image/FrontView.png'
import FrontAngle from '../../../image/FrontViewAngle.png'
import Back from '../../../image/BackView.png'
import styles from './Home.module.css'

import red from '../../../image/plastic/red.png'
import green from '../../../image/plastic/green.png'
import blue from '../../../image/plastic/blue.png'
import grey from '../../../image/plastic/grey.png'
import turquoise from '../../../image/plastic/turquoise.png'
import violet from '../../../image/plastic/violet.png'


const Home: FC = () => {

  const [showAlert, setShowAlert] = useState(false)

  const [counter, setCounter] = useState(1)

  const [card, setCard] = useState(blue)

  return (
      <div className={`${styles.Home} container text-center`} style={{marginTop: 100, marginBottom: 25}}>


        <div className="row justify-content-center align-items-center">
          <div className="col-xs-7 col-lg-6">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner"
                   style={{borderRadius: 25, boxShadow: " 5px 5px 5px #ccc", border: '1px solid #ccc'}}>
                <div className="carousel-item active">
                  <img
                      src={Front}
                      className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={FrontAngle}
                       className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img
                      src={Back}
                      className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img
                      src={ReCoil}
                      className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"
                      style={{backgroundColor: '#ccc'}}></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                      data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"
                      style={{backgroundColor: '#ccc'}}></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-xs-7 col-lg-5" style={{textAlign: 'left', marginLeft: 25, marginTop: 25}}>
            <div className="fs-3"><b>Устройство для производства филамента ReCoil System</b></div>
            <div style={{marginTop: 50, fontSize: 24}}>
              <span>89 990 руб.</span>
              <button type="button" onClick={() => {
                // @ts-ignore
                ym(93835150, 'reachGoal', 'btn-buy')
                setShowAlert(true)
              }}
                      style={{width: 175, marginLeft: 25, fontSize: 18}}
                      className="btn btn-success" id={'btn-buy'}>Купить
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center" style={{marginTop: 50, textAlign: 'justify'}}>
          <div className={`${styles.text}  col-xs-9 col-lg-8`}>
            <p>Устройство ReCoil System предназначен для производства пластикового филамента, используемого при FDM
              печати. ReCoil System способен производить нить из пластиковых гранул с максимальной температурой
              плавления до 300 градусов. Экструзия материал осуществляется при помощи вращения шнека и двигателя,
              оборудованного редуктором. Система также оборудована катушкой с функцией автоматической намотки
              пластика. </p>
            <p><strong>Гранулы ABS пластика</strong></p>

            <div className='row justify-content-evenly align-items-center'>
              <div className='col-5'>
                <div className="card">
                  <img src={card} className="card-img-top" alt="..."/>
                </div>

                <div className='row justify-content-around align-items-center' style={{marginTop: 15}}>
                  <div className={card === red ? styles.Clicked : styles.Circle} onClick={() => setCard(red)}>
                    <img src={red} className={`card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                  <div className={card === green ? styles.Clicked : styles.Circle} onClick={() => setCard(green)}>
                    <img src={green} className={` card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                  <div className={card === blue ? styles.Clicked : styles.Circle} onClick={() => setCard(blue)}>
                    <img src={blue} className={` card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                  <div className={card === violet ? styles.Clicked : styles.Circle} onClick={() => setCard(violet)}>
                    <img src={violet} className={` card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                  <div className={card === grey ? styles.Clicked : styles.Circle} onClick={() => setCard(grey)}>
                    <img src={grey} className={` card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                  <div className={card === turquoise ? styles.Clicked : styles.Circle} onClick={() => setCard(turquoise)}>
                    <img src={turquoise} className={` card-img-top`} style={{width: 10}} alt="..."/>
                  </div>
                </div>
              </div>

              <div className='col-lg-5' style={{textAlign: "center", marginTop: 15}}>
                <span style={{marginRight: 10, userSelect: "none"}}>Цена: {counter * 250}</span>

                <button disabled={counter === 1} type="button" className="btn btn-light"
                        onClick={() => setCounter(counter - 1)}> -
                </button>
                <span style={{margin: 15}}>{counter}</span>
                <button type="button" className="btn btn-light" onClick={() => setCounter(counter + 1)}> +</button>


                <div style={{marginTop: 15}}>
                  <button type="button" onClick={() => {
                    // @ts-ignore
                    ym(93835150, 'reachGoal', 'btn-plastic')
                    setShowAlert(true)
                  }}
                          style={{width: 175, fontSize: 18}}
                          className="btn btn-success" id={'btn-plastic'}>Купить
                  </button>
                </div>

              </div>

            </div>

            <p style={{marginTop: 10}}><strong>Характеристики:</strong></p>
            <p>Диапазон температуры: 120-300 градусов</p>
            <p>Скорость экструзии: 10-40 оборотов в минуту</p>
            <p>Тип перерабатываемого материала: PLA, ABS, PETG, HIPS и др.</p>
            <p>Диаметр нити: 1.75/2.85</p>
            <p>Размеры: 674х215х240 мм</p>
            <p><strong>Комплектация:</strong></p>
            <p>Экструдер</p>
            <p> ABS пластик (1 кг)</p>
            <p> Сопло 1,75 мм </p>
            <p>Катушка для пластика</p>
            <p>Кабель питания</p>
            <p>Руководство по эксплуатации</p>
            <p></p>

          </div>
        </div>
        {showAlert && <>
          <SendEmail confirm={() => setShowAlert(false)}/>
        </>}
      </div>
  )
}
export default Home
