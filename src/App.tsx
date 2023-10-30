import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import { RoutesLinks } from './Routes';
import Layout from './Layout/app/Layout';
import Auth from './Pages/Auth/Page';
const Page404 = lazy(() => import("./Pages/Home/Page404"))

const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />

      {RoutesLinks?.map((item: any, index: number) => (
        <Route key={index} path={item.href} element={<Suspense fallback={<Loading />}>
          <Layout>  {item?.element ?? "Please Add Elemnt Props in Routes"} </Layout></Suspense>} />))
      }
    </Routes>
  )
}

export default App