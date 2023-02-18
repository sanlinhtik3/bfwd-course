import { NavLink, useNavigate, useParams } from "react-router-dom";
import {decode} from 'html-entities';
import { useEffect, useState } from "react";
import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";


// Mark Down
import MarkDown from "../components/MarkDown";

const CourseDescription = props => {
    const {guideID} = useParams();
    const {videoID} = useParams();
    
    const navigate = useNavigate();

    const markdown = decode(props.datas.description)

    let issetImg = (props.datas.logo != "" ? props.datas.logo : props.logo)
    // console.log(decode(props.datas.description))

    return (
      <>
          <HelmetProvider>
              <Helmet>
                  <title>{props.datas.courseName} | inficreax</title>
                  <meta property="og:title" content="Inficreax E-Learning Platform Free"/>
                  <meta name="description" content="Inficreax E-Learning Platform Free"/>
                  <meta property="og:description" content="Inficreax E-Learning Platform Free"/>
              </Helmet>
          </HelmetProvider>
        <div className="px-3 lg:px-0">
          <button
            onClick={() => navigate("/")}
            className="text-emerald-500 mb-5"
          >
            <i className="fa-solid fa-angle-left"></i> Back
          </button>
          <div className="flex items-center space-x-3 mb-5">
            <div className="border rounded-full p-2">
              <img src={issetImg} className="w-10 h-10 m-0" alt="" />
            </div>
            <h1 className="m-0 text-xl lg:text-3xl font-semibold font-poppins">{props.datas.courseName}</h1>
          </div>

          <div className="grid lg:grid-cols-6 gap-5">
            <div className="lg:col-span-4">
              <div
                onClick={() =>
                  navigate(`/course/${props.datas.courseName}/1/1`)
                }
                className="lg:sticky lg:top-5 shadow-lg shadow-emerald-50 p-3 rounded-2xl group transition hover:scale-95 hover:bg-slate-50"
              >
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100">
                    <i className="fa-regular fa-circle-play text-3xl text-white"></i>
                  </div>
                  <img
                    className="rounded-xl mt-0 aspect-video"
                    src={props.datas.img}
                    alt=""
                  />
                </div>
                <h1 className="mb-0 lg:mb-auto">{props.datas.courseName}</h1>
                <h6>{props.datas.level}</h6>
              </div>
            </div>
            <div className="lg:col-span-2">
              {props.datas.description != "" ? (
                <MarkDown markdown={markdown} />
              ) : (
                <h4>No description!</h4>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default CourseDescription;