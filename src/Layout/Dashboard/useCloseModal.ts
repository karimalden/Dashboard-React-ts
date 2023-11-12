import React, { useEffect } from 'react'
import { usePageState } from '../../lib/state'

function useCloseModal(statusClose:any) {

    const {CloseAllModal} = usePageState()
    
    useEffect(()=>{

        if(statusClose){
            CloseAllModal()
        }
    },[statusClose , CloseAllModal])

  return true
}

export default useCloseModal