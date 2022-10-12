import { Route, Routes } from "react-router-dom";
import NotFount404 from "./404";
import Navbar from "./components/Navbar";
import Course from "./courses/Course";
import CourseDetail from "./courses/CourseDetail";

const Master = props => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Course/>}></Route>
                <Route path="/course" element={<Course/>} />
                <Route path="/course/:videoID" element={<CourseDetail/>} />
                <Route path="*" element={<NotFount404/>} />
            </Routes>
        </>
    )
}

export default Master;