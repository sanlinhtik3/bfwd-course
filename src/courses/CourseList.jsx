import { NavLink, useParams, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ThereIsNoData from "./ThereIsNoData";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";

// Get Logal APIs
import getAPIs from '../../app.json';

const CourseList = props => {
    const [APIs, setAPIs] = useState(getAPIs.apis);

    const navigate = useNavigate();

    if(APIs.length === 0) {
        return <ThereIsNoData/>
    }

    const [isLoding, setIsLoding] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //       setIsLoding(!isLoding);
    //     }, 500);
    // }, []);

    // if(isLoding === true) {
    //     return <LoadingScreen/>
    // }

    return (
        <>
            <div className="container mx-auto px-3 lg:px-10 2xl:px-32 mt-9">
                <h1>Course{APIs.length !== 1 && "s"}</h1>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {APIs.map(API => {
                        return (
                          <div
                            key={API.id}
                            onClick={() =>
                              navigate(`/course/${API.courseName}`)
                            }
                            className="shadow-lg shadow-emerald-50 p-3 rounded-2xl group transition hover:scale-105 hover:rotate-3"
                          >
                            <div className="relative">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100">
                                <i className="fa-regular fa-circle-play text-3xl text-white"></i>
                              </div>
                              <img
                                className="rounded-xl m-0 aspect-video"
                                src={API.img}
                                alt=""
                              />
                            </div>
                            {/* Category, Origin and Discount Fee */}
                            <div className="flex justify-between items-start font-oswald">
                              <h6 className=" text-slate-400">
                                {API.category}
                              </h6>
                              <div className="text-end">
                                <h6
                                  className={`${
                                    API.discount === "0"
                                      ? ""
                                      : "line-through text-red-500"
                                  }`}
                                >
                                  {API.originFee} MMK
                                </h6>
                                <h6
                                  className={`${
                                    API.discount === "0"
                                      ? "text-transparent"
                                      : "text-emerald-500"
                                  }`}
                                >
                                  {API.discount} MMK
                                </h6>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center space-x-3 font-oswald">
                              <h2 className="mt-0 mb-0">{API.courseName}</h2>
                              <h6 className="mb-0 bg-emerald-500 text-slate-100 px-3 py-1 rounded-md text-xs">
                                {API.fee}
                              </h6>

                              {/* Enrollments */}

                              <div className="relative">
                                <span class="flex h-3 w-3 scale-75">
                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                                  <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
                                </span>
                              </div>
                              <h6 className="mb-0 text-xs text-slate-400">
                                {API.enrollments}{" "}
                                {API.enrollments > 1
                                  ? "enrollments"
                                  : "enrollment"}
                              </h6>
                            </div>
                            <h6 className="font-oswald text-emerald-300">
                              {API.level}
                            </h6>
                            <div
                              onClick={() =>
                                navigate(`/course/${API.courseName}`)
                              }
                              href=""
                              className="bg-emerald-500 text-slate-100 px-3 py-2 rounded-md no-underline w-full text-center mt-5 font-oswald outline outline-emerald-200"
                            >
                              Start Course for Free
                            </div>
                          </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
    
}

export default CourseList;