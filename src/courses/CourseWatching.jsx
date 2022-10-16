import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import axios from "axios";

// Get All Local APIs
import getAPIs from '../app.copy.json';

import CourseDetailDescription from "./CourseDetailDescription";
import LoadingScreen from "../components/LoadingScreen";

const CourseWatching = props => { 
    const {courseName} = useParams();
    const {guideID} = useParams();
    const {videoID} = useParams();
    // console.log(guideID)

    const navigate = useNavigate();

    // console.log(videoID)
    // console.log(courseName)

    // From (app.copy.json)
    const [APIs, setAPIs] = useState(getAPIs);
    // console.log(APIs.map(aaa => aaa.courseName))
    // console.log(APIs.map(api => api.guides.map(ap => ap.lessons.map(gh => gh.title))))

    // Filter Course Name
    const CourseName = APIs.filter(cv => cv.courseName === courseName);
    const [Ohh, setOhh] = useState(...CourseName)
    console.log(Ohh)

    // Check Guide
    const CheckGuide = Ohh.guides.filter(cg => cg.id == guideID)
    const checkGuideGet = CheckGuide[0]
    // console.log(CheckGuide[0])

    // Filter Lesson ID
    const WatchLesson = checkGuideGet.lessons.filter(cgg => cgg.id == videoID);
    // console.log(WatchLesson)

    // const [isLoding, setIsLoding] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //       setIsLoding(!isLoding);
    //     }, 2000);
    // }, []);

    // if(isLoding === true) {
    //     return <LoadingScreen/>
    // }

    let issetImg = (Ohh.logo != "" ? Ohh.logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png")

    return (
        <>
            <div className="">
                <div className="container mx-auto lg:px-10 2xl:px-32 lg:pt-9">
                    {/* Back Button */}
                    <button onClick={() => navigate(`/course/${courseName}`)} className="text-pink-500 mb-5"><i className="fa-solid fa-angle-left"></i> Back</button>
                    <div className="flex items-center space-x-3 mb-5">
                        <div className="border rounded-full p-2">
                            <img src={issetImg} className="w-10 h-10 m-0" alt="" />
                        </div>
                        <h1 className="m-0">{courseName}</h1>
                    </div>

                    <div className="grid lg:grid-cols-8 lg:gap-5">

                        {/* Lesson Video */}
                        <div className="lg:col-span-5 xl:col-span-6 p-3 lg:p-0 sticky top-0">
                            <iframe id="youtube-cus" className="w-full aspect-video rounded-2xl" src={WatchLesson[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        {/* Lesson List */}
                        <div className="lg:col-span-3 xl:col-span-2 p-3 lg:p-0">
                            <div className="shadow p-5 rounded-2xl h-96 lg:h-80 xl:h-[33rem] overflow-scroll">
                                <h1 className=""><i className="fa-regular fa-file-video"></i> Lessons</h1>
                                <div className="mb-10">
                                    {Ohh.guides.map(courseUnit => {
                                        return (
                                            <div key={courseUnit.id} className="">
                                                {/* {console.log(courseUnit)} */}
                                                <h2>{courseUnit.title}</h2>
                                                <div className="grid grid-cols-1 divide-y text-xs">
                                                    {courseUnit.lessons.map((COURSE) => {
                                                        return (
                                                            <div key={COURSE.id} className="space-x-3 py-3">
                                                                <NavLink to={`/course/${courseName}/${courseUnit.id}/${COURSE.id}`} className={({isActive}) => isActive ? 'text-pink-500 flex justify-between no-underline' : 'flex justify-between no-underline'}>
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