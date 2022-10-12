import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import axios from "axios";

import COURSES from '../app.json';

const CourseDetail = props => {
    const {videoID} = useParams();

    // const COURSES = [
    //     {id: 1, title: "Unit 1 : Introduction", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 2, title: "Unit 1 : Environment", url: 'https://www.youtube.com/embed/iGFbwCznMjY'},
    //     {id: 3, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 4, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 5, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 6, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 7, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 8, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 9, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    //     {id: 10, title: "Unit 1 : Setup", url: 'https://www.youtube.com/embed/_Z5-P9v3F8w'},
    // ]

    const [course, setCourse] = useState(COURSES);

    // Store API (api.json)
    // const COURSE = COURSES;

    const ClickVideo = course.filter(cv => cv.id == videoID)
    // console.log(ClickVideo[0])
    
    // const navigate = useNavigate()
    // onClick={() => navigate(`/course/${COURSE.id}`)}

    return (
        <>
            <div className="">
                <div className="container mx-auto lg:px-40 py-3">
                    <div className="grid lg:grid-cols-8 lg:gap-5">
                        <div className="col-span-6">
                            <iframe className="w-full aspect-video rounded-2xl" src={ClickVideo[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-span-2">
                            <div className="shadow p-5 rounded-2xl h-96 overflow-scroll">
                                <div className="space-y-5">
                                    {course.map((COURSE) => {
                                        return (
                                            <NavLink to={`/course/${COURSE.id}`} key={COURSE.id} className={({isActive}) => isActive ? 'text-pink-500 flex items-center space-x-3' : 'flex items-center space-x-3'}>
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

export default CourseDetail;