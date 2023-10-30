import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <div className='not_foound_page'>
        <div className='container-not-found'>

        <p>404 <h6>|</h6>This page could not be found</p>
        <div> <button onClick={()=>navigate('/' , {replace:true})}>Home</button></div>
        </div>
    </div>
  )
}

export default NotFoundPage