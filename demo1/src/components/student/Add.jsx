import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {addNew} from "../../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {findAllClasses} from "../../service/classServicce.js";

const validate = Yup.object({
    name: Yup.string().required("Yêu cầu nhập tên")
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên phải đúng định dạng"),
    class: Yup.string().required("Yêu cầu chọn lớp")
})

const Add = () => {
    const navigate = useNavigate();
    const [student,setStudent] = useState(
        {
            name:"",
            class :""
        }
    );
    const [classList, setClassList] = useState([]);
    useEffect(() => {
        const fetData = async()=>{
            const list = await findAllClasses();
            setClassList(list);
        };
        fetData();
    }, []);
    const handleSubmit = async (student)=>{
        console.log("-------------------------them moi ------------")
        student = {
            ...student,
            class: JSON.parse(student.class)
        }
       let isSuccess = await addNew(student);
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
                    {/*<div>*/}
                    {/*    <label>ID</label>*/}
                    {/*    <Field type ="text" name ="id"/>*/}
                    {/*    <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Tên</label>
                        <Field type ="text" name ={'name'}/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <label>Lớp</label>
                        <Field as ='select' name ="class">
                            <option value="">---Chọn lớp----</option>
                            {
                               classList.map(cls=>(
                                   <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                               ))
                            }
                        </Field>
                        <ErrorMessage name={'class'} className={'text-danger'} component={'small'}/>

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

