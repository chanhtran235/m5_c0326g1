
const studentList = [
    {
        id:1,
        name:"chánh",
        className : "C03"
    },
    {
        id:2,
        name:"chánh3",
        className : "C03"
    },
    {
        id:3,
        name:"chánh3",
        className : "C03"
    },
]

export const  findAll = ()=>{
    return [...studentList]
}

export const addNew=(student) => {
    studentList.push(student)
    return true;
}
export const deleteByID= (id)=>{
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id ==id){
            studentList.splice(i,1);
            break
        }
    }
    return true;
}
export const findById= (id)=>{
    return studentList.find(s=>s.id==id);
}