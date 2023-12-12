import React from 'react'
import LoadingSpinner from '../../Components/Ui/LoadingSpinner'

function LoadingPage() {
  return (
<div style={{height:"80vh", width:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <LoadingSpinner/>
    </div>
  )
}

export default LoadingPage