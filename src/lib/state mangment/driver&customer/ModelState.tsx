import {create} from 'zustand'

interface ModalState {

    isOpenBlock:boolean ,
    isOpenGift:boolean ,
    isOpenUnBlock:boolean ,

    setIsopenBlock :() => void , 
    setIsopenUnBlock :() => void , 
    setIsopenGift :() => void , 

    setObjectId :(data:number) => void , 
    objectID:number

}

export const useCommonModelState = create<ModalState>((set) => ({

    isOpenBlock:false,
    isOpenGift:false,
    isOpenUnBlock:false,

    setIsopenBlock: () =>
    set((state) => ({ isOpenBlock: !state.isOpenBlock })),
    setIsopenUnBlock: () =>
    set((state) => ({ isOpenUnBlock: !state.isOpenUnBlock })),
    setIsopenGift: () =>
    set((state) => ({ isOpenGift: !state.isOpenGift })),
    setObjectId: (data:number) =>
    set((state) => ({ objectID: data })),
    objectID:0
}));
