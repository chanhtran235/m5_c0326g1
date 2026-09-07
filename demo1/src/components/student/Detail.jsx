import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../../service/studentService.js";

const Detail = ()=>{
    const {id} = useParams("id");
    const [student,setStudent] = useState({});
    useEffect(() => {
        setStudent(findById(id))
    }, []);
    return(
        <>
            <h2>Chi tiết </h2>
            <p>ID: {student.id} </p>
            <p>Name: {student.name}</p>
            <p>Class name : {student.className}</p>
        </>
    )
}
export default Detail;