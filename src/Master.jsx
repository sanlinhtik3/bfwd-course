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
import MarkDown from "./courses/MarkDown";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Whatisnew from "./pages/Whatisnew";
import Logos from "./pages/Logos";
import Nav from "./components/Nav";

const Master = props => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>BFWD</title>
                    <meta property="og:title" content="Digital Hunter E-Learning Platform Free"/>
                    <meta name="description" content="Digital Hunter E-Learning Platform Free"/>
                    <meta property="og:description" content="Digital Hunter E-Learning Platform Free"/>
                </Helmet>
            </HelmetProvider>
            <Alert/>
            <Nav/>
            <Routes>
                <Route path="/" element={<Course/>}></Route>
                <Route path="/course" element={<Course/>} />
                <Route path="/course/:courseName" element={<CourseDetail/>} />
                <Route path="/course/:courseName/:guideID/:videoID" element={<CourseWatching/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/logos" element={<Logos/>} />
                <Route path="/whatisnew" element={<Whatisnew/>} />
                <Route path="/md" element={<MarkDown/>} />
                <Route path="*" element={<NotFount404/>} />
            </Routes>
        </>
    )
}

export default Master;