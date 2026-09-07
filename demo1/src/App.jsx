import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import List from "./components/student/List.jsx";
import Home from "./components/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Add from "./components/student/Add.jsx";
import Detail from "./components/student/Detail.jsx";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}>
                    <Route path={'student'} element={<List/>}/>
                    <Route path={'student/add'} element={<Add/>}/>
                    <Route path={'student/detail/:id'} element={<Detail/>}/>
                </Route>

            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App
