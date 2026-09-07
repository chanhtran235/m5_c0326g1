import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import {addNew, findAll} from "../../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";

const validate = Yup.object({
    id: Yup.number().required("yêu cầu nhập")
        .min(1,"Id phải dương"),
    name: Yup.string().required("Yêu cầu nhập tên")
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên phải đúng định dạng")
})

const Add = () => {
    const navigate = useNavigate();
    const [student,setStudent] = useState(
        {
            id: "",
            name:"",
            className: ""
        }
    );
    const handleSubmit =(value)=>{
       let isSuccess = addNew(value);
       if (isSuccess){
           toast.success('Thêm mới thành công');
       }else {
           toast.error('Thêm mới thất bại');
       }
        navigate('/dashboard/student');
    }
    return (
        <>
            <h2>Thêm mới</h2>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={validate}>
                <Form>
                    <div>
                        <label>ID</label>
                        <Field type ="text" name ="id"/>
                        <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <label>Tên</label>
                        <Field type ="text" name ={'name'}/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <label>Lớp</label>
                        <Field type ="text" name ="className"/>
                        <ErrorMessage name={'className'} className={'text-danger'} component={'small'}/>

                    </div>
                    <div>
                        <button type={'submit'}> Lưu</button>
                        <button  type={'button'}> Huỷ</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}
export default Add;