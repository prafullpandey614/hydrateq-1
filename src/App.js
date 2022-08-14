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
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Prafull/>}/>
        <Route  path="/project/:id" element={ <ProjectScreen/>} />
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
export default App
