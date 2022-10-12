import { NavLink, useParams, Outlet } from "react-router-dom";
import COURSES from '../app.json';
import { useEffect, useState } from "react";

const CourseList = props => {
    const [courses, setCourses] = useState(COURSES);

    return (
        <>
            <div className="">
                <div className="container mx-auto lg:px-40 py-3">
                    <div className="grid lg:grid-cols-8 lg:gap-5">
                        <div className="col-span-6">
                            <iframe className="w-full aspect-video rounded-2xl" src="https://www.youtube.com/embed/_Z5-P9v3F8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-span-2">
                            <div className="shadow p-5 rounded-2xl h-96 overflow-scroll">
                                <div className="space-y-5">
                                    {courses.map((COURSE) => {
                                        return (
                                            <NavLink to={`${COURSE.id}`} key={COURSE.id} className="flex items-center space-x-3">
                                                <div className="w-10 h-10 border rounded-full flex justify-center items-center">
                                                    <i className="fa-regular fa-circle-play"></i>
                                                </div>
                                                <h4>Unit 1 : Introduction</h4>
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseList;