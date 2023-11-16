import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import { RoutesLinks } from './Routes';
import Layout from './Layout/app/Layout';
import Auth from './Pages/Auth/Page';
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />
      {RoutesLinks?.map((item: any, index: number) => (
        
        <Fragment key={index}>
           <Route  path={item.href} element={<Suspense fallback={<Loading />}>
          <Layout>  {item?.element ?? "Please Add Element Props in Routes"} </Layout></Suspense>} />
          {item?.Viewelement?    <Route path={item?.Viewhref} element={<Suspense fallback={<Loading />}>
          <Layout>  {item?.Viewelement ?? "Please Add Element Props in Routes"} </Layout></Suspense>} />
          
          : '' }
        </Fragment>
        
          ))
      }
    </Routes>

        
     
  )
}

export default App