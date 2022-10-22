import { Routes, Route } from "react-router-dom";
import Master from "./Master";
import {Helmet} from "react-helmet";

// GA
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-163129129-3";
ReactGA.initialize(TRACKING_ID)
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="prose prose-sm prose-slate max-w-full">
      <Master/>
    </div>
  )
}

export default App;