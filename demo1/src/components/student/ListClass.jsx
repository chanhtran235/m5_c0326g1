import React from "react";
import {findAll} from "../../service/studentService.js";
import DeleteClass from "./DeleteClass.jsx";

class ListClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentList : [],
            showModal : false,
            deleteStudent : {
                id: "",
                name: "",
                className : ""
            }
        }
    }
    componentDidMount() {
        console.log("------did mount------");
        // this.state.setState(pre =>({
        //     ...pre,
        //     studentList: [...findAll()]
        // }))
        this.setState({
            studentList : [...findAll()]
        });

    }
    handleShowModal(student){
        this.setState({
            showModal : true,
            deleteStudent : student
        })
    }
    closeModal = ()=>{
        this.setState({
            showModal : false,
        })
    }
    reLoading = ()=>{
        this.setState({
            studentList : [...findAll()]
        })
    }


    render() {
       return(
           <>
               {
                   console.log("-------list----------")
               }
               <h2>Danh sách sinh viên</h2>
               <table className={'table table-dark table-striped'}>
                   <thead>
                   <tr>
                       <th>STT</th>
                       <th>ID</th>
                       <th>Tên</th>
                       <th>Lớp học</th>
                       <th>Xoá</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                      this.state.studentList.map((student,i)=>(
                           <tr key={student.id}>
                               <td>{i+1}</td>
                               <td>{student.id}</td>
                               <td>{student.name}</td>
                               <td>{student.className}</td>
                               <td>
                                   <button className={'btn btn-sm btn-danger'} onClick={()=>{
                                       this.handleShowModal(student);
                                   }}>Xoá</button>
                               </td>
                           </tr>
                       ))
                   }
                   </tbody>
               </table>
               <DeleteClass showModal = {this.state.showModal}
                            student = { this.state.deleteStudent}
                            closeModal = {this.closeModal}
                            reloading = {this.reLoading}
               />
           </>
       )
   }

}
export default ListClass;