import React from 'react'
import Page from '../../NewLayout/Page'
import { FaHome } from 'react-icons/fa'

const users = () => {
    const Data:any = [
        {
            Name : "user",
            href : "/user",
            Icon : <FaHome/>,
            element:<Page/>,

            },
    ]
  return (
  <div>
        {
            Data?.map((item:any,index:any)=>(
                <div key={index}>
                <Page />

                </div>
            ))
        }
  </div>
  )
}

export default users