import React, {FC} from "react";

import {Routes, Route, HashRouter} from 'react-router-dom';

import {routes} from './dataRoutes'
import Layout from "../layout/Layout";

const Router: FC = () => {


  return (
      <>
        <HashRouter>
          <Layout>
            <Routes>
              {routes.map(route => (
                      <Route key={`route ${route.path}`} path={route.path} element={<route.component/>}/>
                  )
              )}
            </Routes>
          </Layout>
        </HashRouter>
      </>
  )
}
export default Router
