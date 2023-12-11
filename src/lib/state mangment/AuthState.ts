import create from 'zustand';

interface LoginResponse {
    token:string  ,
    "user": any
}

interface AuthStore {
  user: any | null |undefined;
  token:string |null | undefined;
  isAuthenticated: boolean;
  login: (userData: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthState = create<AuthStore>((set) => {
  const PROJECT_NAME = "ELIET_AUCTION_ADMIN_DASHBOARD"

 const TOKEN_KEY = PROJECT_NAME +  "_TOKEN"

 const USER_KEY =  PROJECT_NAME + "_USER"

   
    const storedUser :any   = localStorage.getItem(USER_KEY)  ;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  const initialUser = (storedUser && storedUser !== 'undefined') ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    isAuthenticated: !!storedToken,
    token:storedToken,
    login: async (userData) => {
        console.log(userData);
        
        localStorage.setItem(TOKEN_KEY , userData.token)
        localStorage.setItem(USER_KEY , JSON.stringify(userData.user))

        set((state)=>({user:userData.user , isAuthenticated:true , token:userData.token}))
        
    },
    logout: async () => {
         
        localStorage.removeItem(TOKEN_KEY )
        localStorage.removeItem(USER_KEY )
        set((state)=>({user:null , isAuthenticated:false , token:null}))

        
    },
  };
});

export default useAuthState;
