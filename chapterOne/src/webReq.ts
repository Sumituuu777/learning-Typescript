import axios,{AxiosResponse, isAxiosError} from "axios"
// Note;-> Axios ke Datatypes Generics hote h 
interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
const fetchData= async()=>{
    try {
        const response:AxiosResponse<Todo>=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data);           //respose. karte hi suggestin de dega ki kya kya h response me (config,data,headers)
                                          //axiosResponse use karne se ab hume pata h ki .data aaya h ki.output aaya h aise
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("error",error.message)    //ab ye suggesstion deta h ki axios type ke error me kya kya h

            if(error.response){               // ab hume pata h kya h error me toh hum or destruture kar sakte h
                console.log(error.response.data)
            }
        }
    }
}
