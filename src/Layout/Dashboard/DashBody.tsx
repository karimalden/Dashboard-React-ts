import { Spinner } from "reactstrap"
import { QueryStatusEnum } from "../../config/QueryStatus"


const DashBody = ({ children , status }: { children: React.ReactNode ,status:QueryStatusEnum }) => {
  

  // Add You Custom Loadaing Page
  if(status === QueryStatusEnum.LOADING){

    return <Spinner />
  }

  // Add Your Custom Error Page 
  if(status === QueryStatusEnum.ERROR){
    return <div>"An Error Accourding PLease Try Again Later"</div>
  }
  
  return (
    <div className='Page' >
      { children }
    
  </div>
  )
}

export default DashBody
