import { Routes, Route } from "react-router-dom";
import Master from "./Master";

const App = () => {
  return (
    <div className="prose prose-sm prose-slate max-w-full">
      <Master/>

      {/* Testing */}
      {/* {console.log(import.meta.env.BASE_URL)} */}
      {/* {console.log(process.env.NODE_ENV === 'production' ? '/repo-name/' : './')} */}
    </div>
  )
}

export default App;