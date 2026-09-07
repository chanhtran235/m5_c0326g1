import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="container-fluid vh-100">

            <div className="row h-100">

                {/* Sidebar */}
                <div className="col-2 p-0">

                    <h6 className="text-center py-3 border-bottom">
                        Dashboard
                    </h6>

                    <div className="list-group list-group-flush">

                        <Link
                            to="/dashboard/student"
                            className="list-group-item list-group-item-action"
                        >
                            Students
                        </Link>

                        <Link
                            to="courses"
                            className="list-group-item list-group-item-action"
                        >
                            Courses
                        </Link>

                    </div>

                </div>

                {/* Outlet */}

                <div className="col-10 p-4 bg-light">

                    <Outlet />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;