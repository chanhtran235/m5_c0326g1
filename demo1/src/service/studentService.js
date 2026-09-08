import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL;


export const  findAll = async ()=>{
    try{
        const res = await axios.get(`${BE_URL}/students`);
        return res.data;
    }catch (e){
        console.log(e);
        return [];
    }

}

export const addNew=async (student) => {
    try{
        const res = await axios.post(`${BE_URL}/students`,student);
        return res.status==201;
    }catch (e){
        console.log(e);
        return false;
    }
}

export const deleteByID= async (id)=>{

    try{
        const res = await axios.delete(`${BE_URL}/students/${id}`);
        return res.status==200;
    }catch (e){
        console.log(e);
        return false;
    }
}
export const findById= async (id)=>{
    try{
        const res = await axios.get(`${BE_URL}/students/${id}`);
        return res.data;
    }catch (e){
        console.log(e);
        return [];
    }
}