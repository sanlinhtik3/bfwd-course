import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate, json } from "react-router-dom";

const CourseDetailDescription = props => { 

    return (
        <>
            <div className="mt-20 px-3 lg:px-0">
                <div className="">
                    <h5 className="">About This Lesson</h5>
                    <hr className="mt-3 mb-10" />
                    <div className="">
                        <h1 className="">{props.descriptions.title}</h1>
                        <p className="lg:max-w-2xl">
                            {props.descriptions.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailDescription;