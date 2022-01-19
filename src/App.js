import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BackTop, Divider } from "antd";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Timeline } from "./components/Timeline/Timeline";
import { PageBackground } from "./components/PageBackground/PageBackground";

const App = () => {
  return (
    <div className="App">
      <BackTop />
      <NavBar />
      <PageBackground />
      <AboutMe />
      <Timeline />
      <AboutMe />
    </div>
  );
};

export default App;
