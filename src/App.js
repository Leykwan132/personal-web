import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BackTop, Divider } from "antd";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Timeline } from "./components/Timeline/Timeline";
import { PageBackground } from "./components/PageBackground/PageBackground";
import { Skills } from "./components/Skills/Skills";
import PageProgress from "react-page-progress";
const App = () => {
  return (
    <div className="App">
      <PageProgress color={"skyblue"} height={5} />
      <BackTop />
      <NavBar />
      <PageBackground />
      <AboutMe />
      <Timeline />
      <Skills />
      {/*<Tools />*/}
    </div>
  );
};

export default App;
