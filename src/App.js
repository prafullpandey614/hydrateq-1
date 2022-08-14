import React from "react";
import { Onbording } from "./screens/Onbording";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Projects from "./components/Projects";
import { Home } from "./screens/Home";
import ProjectScreen from "./screens/ProjectScreen";
import NotFound from "./screens/NotFound";
import Prafull from "./screens/Prafull";
import Analysis from "./screens/Analysis";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/project/:id" element={ <ProjectScreen/>} />
        <Route path="/analysis/:id" element={<Analysis/>}/>
        <Route path="/prafull" element={<Prafull/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
export default App
