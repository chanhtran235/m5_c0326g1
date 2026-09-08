import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL;


export const  findAllClasses = async ()=>{
    try{
        const res = await axios.get(`${BE_URL}/classes`);
        return res.data;
    }catch (e){
        console.log(e);
        return [];
    }

}
