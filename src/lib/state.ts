import {create} from 'zustand'

interface ModalState {
  isOpenAddModel: boolean;
  isOpenEditModel: boolean;
  objectToEdit: any;
  isThemChanged:any;
  setThemChange :()=> void ; 
  setIsOpenAddModel: () => void;
  setIsOpenEditModel: () => void;
  CloseAllModal: () => void;
  setObjectToEdit: (data: any) => void;
}

export const usePageState = create<ModalState>((set) => ({
  isOpenAddModel: false,
  isOpenEditModel: false,
  objectToEdit: null,
  isThemChanged:false,
  setThemChange: () =>
    set((state) => ({ isThemChanged: !state.isThemChanged })),
  setIsOpenAddModel: () =>
    set((state) => ({ isOpenAddModel: !state.isOpenAddModel })),
  setIsOpenEditModel: () =>
    set((state) => ({ isOpenEditModel: !state.isOpenEditModel })),
  CloseAllModal: () =>
    set((state) => ({ isOpenAddModel: false, isOpenEditModel: false })),
  setObjectToEdit: (data) => set(() => ({ objectToEdit: data })),
}));
