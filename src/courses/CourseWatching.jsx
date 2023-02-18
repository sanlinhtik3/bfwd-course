import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import CourseDetailDescription from "./CourseDetailDescription";

// Get All Local APIs
import getAPIs from '../../app.json';

const CourseWatching = props => {
    const {courseName} = useParams();
    const {guideID} = useParams();
    const {videoID} = useParams();
    // console.log(guideID)

    const navigate = useNavigate();

    // From (app.copy.json)
    // const [APIs, setAPIs] = useState(getAPIs.apis);
    const [APIs, setAPIs] = useState(getAPIs.apis);


    // Filter Course Name
    const CourseName = APIs.filter(cv => cv.courseName === courseName);
    const [Ohh, setOhh] = useState(...CourseName)

    // Check Guide
    const CheckGuide = Ohh.guides.filter(cg => cg.id == guideID)
    const checkGuideGet = CheckGuide[0]

    // Filter Lesson ID
    const WatchLesson = checkGuideGet.lessons.filter(cgg => cgg.id == videoID);

    let issetImg = (Ohh.logo != "" ? Ohh.logo : getAPIs.logo)

    return (
      <>
        <div className="">
          <div className="container mx-auto px-3 lg:px-10 2xl:px-32 pt-5 lg:pt-9">
            {/* Back Button */}
            <button
              onClick={() => navigate(`/course/${courseName}`)}
              className="text-emerald-500 mb-5"
            >
              <i className="fa-solid fa-angle-left"></i> Back
            </button>
            <div className="flex items-center space-x-3 mb-5">
              <div className="border rounded-full p-2">
                <img
                  src={issetImg}
                  className="w-5 h-5 lg:w-10 lg:h-10 m-0"
                  alt=""
                />
              </div>
              <h1 className="m-0 text-xl lg:text-3xl font-semibold font-poppins">
                {courseName}
              </h1>
            </div>

            <div className="grid lg:grid-cols-8 lg:gap-5">
              {/* Lesson Video */}
              <div className="lg:col-span-5 xl:col-span-6 shadow-2xl lg:shadow-none shadow-emerald-50">
                <div className="shadow-lg shadow-emerald-50 sticky top-0">
                  <iframe
                    id="youtube-cus"
                    className="w-full aspect-video rounded-2xl"
                    src={WatchLesson[0].url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* About This Lesson */}
                <CourseDetailDescription descriptions={WatchLesson[0]} />
              </div>

              {/* Lesson List */}
              <div className="lg:col-span-3 xl:col-span-2">
                <div className="shadow p-5 rounded-2xl h-96 lg:h-80 xl:h-[33rem] overflow-scroll">
                  <h1 className="text-1xl lg:text-3xl font-semibold font-poppins">
                    <i className="fa-regular fa-file-video"></i> Lessons
                  </h1>
                  <div className="mb-10">
                    {Ohh.guides.map((courseUnit) => {
                      return (
                        <div key={courseUnit.id} className="">
                          {/* {console.log(courseUnit)} */}
                          <h2>
                            Guide {courseUnit.id} : {courseUnit.title}
                          </h2>
                          <div className="grid grid-cols-1 text-xs">
                            {courseUnit.lessons.map((COURSE) => {
                              return (
                                <div
                                  key={COURSE.id}
                                  className="space-x-3 py-3 border-l-4 border-emerald-50"
                                >
                                  <NavLink
                                    to={`/course/${courseName}/${courseUnit.id}/${COURSE.id}`}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "text-emerald-500 flex justify-between no-underline"
                                        : "flex justify-between no-underline text-slate-500"
                                    }
                                  >
                                    <div className="flex items-center space-x-2">
                                      <i className="fa-regular fa-circle-play -ml-2 bg-white"></i>
                                      <span className="">{COURSE.title}</span>
                                    </div>
                                    <div className="">{COURSE.time}</div>
                                  </NavLink>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CourseWatching;