import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

axiosInstance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        let message = "An unknown error occurred";

        if(error.response?.data && (error.response.data as any).message){
            const serverMessage = Array.isArray((error.response.data as any).message) 
                ? (error.response.data as any).message[0]
                : (error.response.data as any).message;
            message = serverMessage;    
        } else if (error.message){
            message = error.message;
        }


        if(typeof window !== "undefined"){
            console.log('dasd')
            setTimeout(() => toast.error(message), 0);
        }else{
            console.error(message);
        }

        return Promise.reject(new Error(message));
    }
)

export default axiosInstance;