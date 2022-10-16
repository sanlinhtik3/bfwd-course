import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import axios from "axios";

// Get All Local APIs
import COURSES from '../app.json';
import getCopyAPIs from '../app.copy.json';

import CourseDetailDescription from "./CourseDetailDescription";
import CourseDescription from "./CourseDescription";

const CourseDetail = props => { 
    // const {videoID} = useParams();
    const {courseName} = useParams();
    // console.log(courseName)

    const [course, setCourse] = useState(COURSES);
    const [copyAPIs, setcopyAPIs] = useState(getCopyAPIs);

    const ClickVideo = copyAPIs.filter(cv => cv.courseName === courseName)
    // console.log(ClickVideo[0].lessons)
    
    // const navigate = useNavigate()
    // onClick={() => navigate(`/course/${COURSE.id}`)}

    return (
        <>
            <div className="">
                <div className="container mx-auto lg:px-10 2xl:px-32 lg:pt-9">
                    <CourseDescription datas={ClickVideo[0]} />
                    {/* <div className="grid lg:grid-cols-8 lg:gap-5">
                        <div className="lg:col-span-6 p-3 lg:p-0 sticky top-0">
                            <iframe className="w-full aspect-video rounded-2xl" src={ClickVideo[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="lg:col-span-2 p-3 lg:p-0">
                            <div className="shadow p-5 rounded-2xl h-96 lg:h-[33rem] overflow-scroll">
                                <h1 className=""><i className="fa-regular fa-file-video"></i> Lessons</h1>
                                <div className="grid grid-cols-1 divide-y">
                                    {course.map((COURSE) => {
                                        return (
                                            <div key={COURSE.id} className="space-x-3 py-3">
                                                <NavLink to={`/course/${COURSE.id}`} className={({isActive}) => isActive ? 'text-pink-500 flex justify-between no-underline' : 'flex justify-between no-underline'}>
                                                    <div className="flex items-center space-x-2">
                                                        <i className="fa-regular fa-circle-play"></i>
                                                        <span className="">{COURSE.title}</span>
                                                    </div>
                                                    <div className="">{COURSE.time}</div>
                                                </NavLink>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* About This Lesson */}
                    {/* <CourseDetailDescription descriptions={ClickVideo[0]} /> */}
                </div>
            </div>
        </>
    )
}

export default CourseDetail;