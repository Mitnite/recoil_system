import React, {FC, useState} from "react";
import SendEmail from "../../sendEmail/SendEmail";
import MainImg from '../../../image/Main.jpg'
import Front from '../../../image/FrontView.jpg'
import Rear from '../../../image/RearView.jpg'


const Home: FC = () => {

  const [showAlert, setShowAlert] = useState(false)

  return (
      <div className="container text-center" style={{marginTop: 100, marginBottom: 25}}>


        <div className="row justify-content-center align-items-center">
          <div className="col-6">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner"
                   style={{borderRadius: 25, boxShadow: " 5px 5px 5px #ccc", border: '1px solid #ccc'}}>
                <div className="carousel-item active">
                  <img
                      src={MainImg}
                      className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={Front}
                       className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img
                      src={Rear}
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

          <div className="col-5" style={{textAlign: 'left', marginLeft: 25}}>
            <h2>Устройство для производства филамента ReCoil System</h2>
            <div style={{marginTop: 50, fontSize: 24}}>
              <span>89 990 руб.</span>
              <button type="button" onClick={() => setShowAlert(true)} style={{width: 175, marginLeft: 25, fontSize: 18}}
                      className="btn btn-success">Купить
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center" style={{marginTop: 50, textAlign: 'justify'}}>
          <div className="col-8" style={{fontSize: 20}}>
            <p>Устройство ReCoil System предназначен для производства пластикового филамента, используемого при FDM
              печати. ReCoil System способен производить нить из пластиковых гранул с максимальной температурой
              плавления до 300 градусов. Экструзия материал осуществляется при помощи вращения шнека и двигателя,
              оборудованного редуктором. Система также оборудована катушкой с функцией автоматической намотки
              пластика. </p>
            <p><strong>Характеристики:</strong></p>
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
