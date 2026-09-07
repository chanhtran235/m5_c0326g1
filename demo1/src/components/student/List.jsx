import {findAll} from "../../service/studentService.js";
import {useCallback, useEffect, useState} from "react";
import Delete from "./Delete.jsx";
import {Link} from "react-router-dom";

const List =()=>{
    const [studentList,setStudentList] = useState([]);
    const [showModal, setShowModel] = useState(false);
    const [deleteStudent,setDeleteStudent] = useState({});
    const [isReloading, setIsReloading] = useState(false)
    useEffect(()=>{
        console.log("----useEffec run---------");
        setStudentList([...findAll()])
    },[isReloading]);
   const handleShowModal= (student)=>{
        setShowModel(true);
        setDeleteStudent(student);
    }


   const closeModal = useCallback(()=>{
       setShowModel(false)
   },[])

    return(
        <>
            {console.log("------------list--------------")}

            <h2>Danh sách sinh viên</h2>
            <Link
                to="/dashboard/student/add"
                className="btn btn-sm btn-primary"
            >
                Thêm mơi sinh viên
            </Link>
            <table className={'table table-dark table-striped'}>
                <thead>
                 <tr>
                     <th>STT</th>
                     <th>ID</th>
                     <th>Tên</th>
                     <th>Lớp học</th>
                     <th>View</th>
                     <th>Xoá</th>
                 </tr>
                </thead>
                <tbody>
                {
                    studentList.map((student,i)=>(
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.className}</td>
                            <td>
                                <Link className={'btn btn-sm btn-secondary'} to={`/dashboard/student/detail/${student.id}`}>Chi tiết</Link>
                            </td>
                            <td>
                                <button className={'btn btn-sm btn-danger'} onClick={()=>{
                                    handleShowModal(student)
                                }} >Xoá</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Delete showModal = {showModal}
                    deleteStudent = {deleteStudent}
                    closeModal = {closeModal}
                    setIsReloading ={setIsReloading}
            />
        </>
    )
}
export default List;