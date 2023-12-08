import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import { RoutesLinks } from './Routes';
import Layout from './Layout/app/Layout';
import Auth from './Pages/Auth/Page';
const Page404 = lazy(() => import("./Layout/app/NotFoundPage"))

const App = () => {


  return (
    <Routes >
      {/* 404 Page */}
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      {/* Login Page  */}
      <Route path="/auth" element={<Suspense fallback={<Loading />}> <Auth /></Suspense>} />      

{/* route */}
      {/* All Routes */}
      {RoutesLinks?.map((item: any, index: number) => (

        <Fragment key={index}>

        if(item?.element){
            <Route 
          path={item.href}
           element={
          <Suspense fallback={<Loading />} >
            <Layout>  
              {item?.element ?? "Please Add Element Props in Routes"}
            </Layout>
           </Suspense>
           } 
            />
        }else{
          item?.children?.map((item:any)=>{
            return(
              <Route 
          path={item.href}
           element={
          <Suspense fallback={<Loading />} >
            <Layout>  
              {item?.element ?? "Please Add Element Props in Routes"}
            </Layout>
           </Suspense>
           } 
            />
            )
          })
          
        }
        
        </Fragment>

      ))
      }
    </Routes>



  )
}

export default App