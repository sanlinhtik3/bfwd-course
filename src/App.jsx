import { Routes, Route } from "react-router-dom";
import Master from "./Master";
import {Helmet} from "react-helmet";

const App = () => {
  return (
    <div className="prose prose-sm prose-slate max-w-full">
      <Master/>
    </div>
  )
}

export default App;