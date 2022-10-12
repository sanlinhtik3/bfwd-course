import { Outlet } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import CourseList from "./CourseList";

const Course = props => {
    return (
        <>
            <CourseList/>
            {/* <Outlet/> */}
        </>
    )
}

export default Course;