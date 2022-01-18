import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BackTop } from "antd";
import { AboutMe } from "./components/AboutMe/AboutMe";
import ParticlesBg from "particles-bg";
import { PageHeader, Image, Typography, Divider, Popover } from "antd";

const App = () => {
  return (
    <div className="App">
      <BackTop />
      <NavBar />
      <AboutMe />
      <Divider className="divider" />
      <ParticlesBg type="polygon" bg={true} />
    </div>
  );
};

export default App;
