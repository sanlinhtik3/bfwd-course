import { Route, Routes } from "react-router-dom";
import NotFount404 from "./404";
import Navbar from "./components/Navbar";
import Course from "./courses/Course";
import CourseDetail from "./courses/CourseDetail";
import CourseWatching from "./courses/CourseWatching";

const Master = props => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Course/>}></Route>
                <Route path="/course" element={<Course/>} />
                <Route path="/course/:courseName" element={<CourseDetail/>} />
                <Route path="/course/:courseName/:videoID" element={<CourseWatching/>} />
                <Route path="*" element={<NotFount404/>} />
            </Routes>
        </>
    )
}

export default Master;