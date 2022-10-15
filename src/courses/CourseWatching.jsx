import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import axios from "axios";

// Get All Local APIs
import getAPIs from '../app.copy.json';

import CourseDetailDescription from "./CourseDetailDescription";

const CourseWatching = props => { 
    const {videoID} = useParams();
    const {courseName} = useParams();
    const navigate = useNavigate();

    // console.log(videoID)
    // console.log(courseName)

    // From (app.copy.json)
    const [APIs, setAPIs] = useState(getAPIs);

    // Filter Course Name
    const ClickVideo = APIs.filter(cv => cv.courseName === courseName);
    const [Ohh, setOhh] = useState(...ClickVideo)

    // Filter Lesson ID
    const WatchLesson = Ohh.lessons.filter(Oh => Oh.id == videoID);

    return (
        <>
            <div className="">
                <div className="container mx-auto lg:px-10 2xl:px-32 lg:pt-9">
                    
                    {/* Back Button */}
                    <button onClick={() => navigate(-1)} className="text-pink-500 mb-5"><i className="fa-solid fa-angle-left"></i> Back</button>

                    <div className="grid lg:grid-cols-8 lg:gap-5">

                        {/* Lesson Video */}
                        <div className="lg:col-span-5 xl:col-span-6 p-3 lg:p-0 sticky top-0">
                            <iframe className="w-full aspect-video rounded-2xl" src={WatchLesson[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        {/* Lesson List */}
                        <div className="lg:col-span-3 xl:col-span-2 p-3 lg:p-0">
                            <div className="shadow p-5 rounded-2xl h-96 lg:h-80 xl:h-[33rem] overflow-scroll">
                                <h1 className=""><i className="fa-regular fa-file-video"></i> Lessons</h1>
                                <div className="grid grid-cols-1 divide-y text-xs">
                                    {Ohh.lessons.map((COURSE) => {
                                        return (
                                            <div key={COURSE.id} className="space-x-3 py-3">
                                                <NavLink to={`/course/${courseName}/${COURSE.id}`} className={({isActive}) => isActive ? 'text-pink-500 flex justify-between no-underline' : 'flex justify-between no-underline'}>
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
                    </div>

                    {/* About This Lesson */}
                    <CourseDetailDescription descriptions={WatchLesson[0]} />
                </div>
            </div>
        </>
    )
}

export default CourseWatching;