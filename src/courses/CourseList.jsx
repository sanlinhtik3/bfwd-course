import { NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Get Logal APIs
import getAPIs from '../app.copy.json';
import ThereIsNoData from "./ThereIsNoData";

const CourseList = props => {
    const [APIs, setAPIs] = useState(getAPIs);
    // console.log(APIs)

    const navigate = useNavigate();

    // console.log(APIs.length === 0)

    if(APIs.length === 0) {
        return <ThereIsNoData/>
    }

    return (
        <>
            <div className="container mx-auto px-5 lg:px-32 mt-9">
                <h1>Courses</h1>
                <div className="grid lg:grid-cols-4 gap-3">
                    {APIs.map(API => {
                        return (
                            <div key={API.id} onClick={() => navigate(`/course/${API.courseName}`)} className="shadow p-3 rounded-2xl group transition hover:scale-95 hover:bg-slate-50">
                                <div className="relative">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100">
                                        <i className="fa-regular fa-circle-play text-3xl text-white"></i>
                                    </div>
                                    <img className="rounded-xl m-0 aspect-video" src={API.img} alt="" />
                                </div>
                                <h3 className="mt-3 mb-0">{API.courseName}</h3>
                                <h6>{API.level}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
    
}

export default CourseList;