import React from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteByID, findAll} from "../../service/studentService.js";

class DeleteClass extends React.Component {

    constructor(props) {
        super(props);
    }

     handleClose = ()=>{
      this.props.closeModal();
    }
    handleDelete =()=>{
        deleteByID(this.props.student.id);
        console.log(findAll());
        this.props.closeModal();
        this.props.reloading();
    }

    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muôn xoá sinh viên </span><span className={'text-danger'}>{this.props.student.name}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={'btn btn-sm'} variant="secondary" onClick={this.handleClose}>
                            Huỷ
                        </Button>
                        <Button className={'btn btn-sm'} variant="primary" onClick={this.handleDelete}>
                            Xoá
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DeleteClass;