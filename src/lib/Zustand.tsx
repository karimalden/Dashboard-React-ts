import { create } from 'zustand'

type useModal = {
    isOpenAddModel: boolean
    isOpenEditModel:boolean
    objectToEdit:{} | null
    setIsOpenAddModel: ()=> any
    CloseAllModal: ()=> any
    SetobjectToEdit: (data:any)=>any
    setIsOpenEditModel:()=>any

  }
export const useModal = create<useModal>((set) => ({
  isOpenAddModel: false,
  isOpenEditModel: false,
  objectToEdit:null,
  setIsOpenAddModel: () => set((state:any) => ({ isOpenAddModel: !state.isOpenAddModel })),
  setIsOpenEditModel: () => set((state:any) => ({ isOpenEditModel: !state.isOpenEditModel })),
  CloseAllModal: () => set((state:any) => ({ isOpenAddModel: false ,isOpenEditModel:false  })),
  SetobjectToEdit: (data:any) => set((state:any) => ({ objectToEdit: data })),

}))