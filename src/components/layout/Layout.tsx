import React, {FC, PropsWithChildren} from "react";
import styles from './Layout.module.css'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {ChildrenProps} from "../../type";

const Layout: FC<PropsWithChildren<ChildrenProps>> = ({children}) => {
  return (
      <div className={styles.Layout}>

        <Header/>


        <div className={styles.Container}>
          {children}
        </div>


        <Footer/>

      </div>
  )
}
export default Layout
