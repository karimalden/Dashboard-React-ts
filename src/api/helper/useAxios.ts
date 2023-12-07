import axios from 'axios'
function useAxios() {
  return (
    axios.create({
        baseURL:"https://api.rayantaxi.com/"  ,
         headers: {'Authorization': "Bearer 1833|laravel_sanctum_B07XNS7e11Khh3VMjkN4AW8s50rF5qZWoMKtYrag7b297adb"}
        
    })
  )
}

export default useAxios