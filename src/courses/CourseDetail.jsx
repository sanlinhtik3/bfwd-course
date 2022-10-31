import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";
import axios from "axios";

import CourseDescription from "./CourseDescription";

// Get All Local APIs
import getAPIs from '../../app.json';

const CourseDetail = props => { 
    const {courseName} = useParams();

    const [APIs, setAPIs] = useState(getAPIs.apis);

    const ClickVideo = APIs.filter(cv => cv.courseName === courseName)
    // console.log(ClickVideo[0].lessons)

    return (
        <div className="">
            <div className="container mx-auto lg:px-10 2xl:px-32 lg:pt-9">
                <CourseDescription logo={getAPIs.logo} datas={ClickVideo[0]} />
            </div>
        </div>
    )
}

export default CourseDetail;