import {Button, Modal} from "react-bootstrap";
import React from "react";
import {deleteByID, findAll} from "../../service/studentService.js";

const Delete = ({showModal,deleteStudent,setIsReloading,closeModal})=>{
    const handleClose = ()=>{
     closeModal();
    }
   const handleDelete =()=>{
        deleteByID(deleteStudent.id);
        console.log(findAll());
        closeModal();
        setIsReloading(pre=>!pre);
    }

    return (
        <>
            {
                console.log("--------delelete-----------")
            }
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muôn xoá sinh viên </span><span className={'text-danger'}>{deleteStudent.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={'btn btn-sm'} variant="secondary" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button className={'btn btn-sm'} variant="primary" onClick={handleDelete}>
                        Xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default React.memo(Delete);