import React from 'react'
import './Add_Button.scss'
import { useModal } from '../../../lib/Zustand'
import { useTranslation } from 'react-i18next'
const AddButtonLayout = () => {
    const { setIsOpenAddModel  } = useModal()
    const [t] = useTranslation();

    return (
        <div className='Add_Button' onClick={()=>setIsOpenAddModel()}>
            <button>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>{" "}
                    {t("Add")}
                </span>
            </button>

        </div>
    )
}

export default AddButtonLayout