import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import WorkExperience from './WorkExperiencee/WorkExperience';
import Recommendations from './AboutMe/Recommendations';

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <Router>
      <div style={{position: 'relative'}}>
        <Particles init={particlesInit} options={particlesOptions} />
        <div style={{position: 'relative', color: 'white'}}>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/aboutMe" Component={AboutMe} />
            <Route path="/workExperience" Component={WorkExperience} />
            <Route path="/recommendations" Component={Recommendations} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
