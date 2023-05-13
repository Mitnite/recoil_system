import React, {FC} from "react";

import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {routes} from './dataRoutes'
import Layout from "../layout/Layout";

const Router: FC = () => {


  return (
      <>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(route => (
                      <Route key={`route ${route.path}`} path={route.path} element={<route.component/>}/>
                  )
              )}
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
  )
}
export default Router
