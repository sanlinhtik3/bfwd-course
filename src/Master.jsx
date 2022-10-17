import { Route, Routes } from "react-router-dom";
import NotFount404 from "./404";
import Navbar from "./components/Navbar";
import Course from "./courses/Course";
import CourseDetail from "./courses/CourseDetail";
import CourseWatching from "./courses/CourseWatching";
import Test from "./courses/Test";
import axios from "axios";
import Alert from "./components/Alert";
import About from "./pages/About";

const Master = props => {

    return (
        <>
            <Alert/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Course/>}></Route>
                <Route path="/course" element={<Course/>} />
                <Route path="/course/:courseName" element={<CourseDetail/>} />
                <Route path="/course/:courseName/:guideID/:videoID" element={<CourseWatching/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<NotFount404/>} />
            </Routes>
        </>
    )
}

export default Master;