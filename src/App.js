import React from "react";
import { Onbording } from "./screens/Onbording";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./screens/Home";
import ProjectScreen from "./screens/ProjectScreen";
import NotFound from "./screens/NotFound";
import Analysis from "./screens/Analysis";
import DataForAll from "./screens/DataForAll";
import StacticAnalysis  from "./screens/StacticAnalysis";
import Thanku from "./screens/Thanku";
import {Help} from "../src/screens/Help";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/project/:id" element={ <ProjectScreen/>} />
        <Route path="/analysis/:id" element={<Analysis/>}/>
        <Route path="/data" element={<DataForAll/>}/>
        <Route path="/analysis" element={<StacticAnalysis/>}/>
        <Route path="/thanks" element={<Thanku/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
export default App
