import { NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import COURSES from '../app.json';
import { useEffect, useState } from "react";

const CourseList = props => {
    const [courses, setCourses] = useState(COURSES);
    const navigate = useNavigate();

    const cous = [
        {id: 1, name: "Basic Fontend Web Development", img: "https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f18321b82797afe4defe702_101%20crashcourse.jpg", level: "Basic"},
    ]

    return (
        <>
            <div className="container mx-auto lg:px-32 lg:mt-9">
                <h1>Courses</h1>
                <div className="grid grid-cols-4 gap-3">
                    {cous.map(cou => {
                        return (
                            <div key={cou.id} onClick={() => navigate(`/course/${cou.id}`)} className="shadow p-3 rounded-2xl group transition hover:scale-95 hover:bg-slate-50">
                                <div className="relative">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100">
                                        <i class="fa-regular fa-circle-play text-3xl text-white"></i>
                                    </div>
                                    <img className="rounded-xl mt-0 aspect-video" src={cou.img} alt="" />
                                </div>
                                <h3>{cou.name}</h3>
                                <h6>{cou.level}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
    
}

export default CourseList;