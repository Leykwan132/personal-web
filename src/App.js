import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BackTop, Popover } from "antd";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Timeline } from "./components/Timeline/Timeline";
import { PageBackground } from "./components/PageBackground/PageBackground";
import { Skills } from "./components/Skills/Skills";
import { Tools } from "./components/Tools/Tools";
import { Footer } from "./components/Footer/Footer";

import PageProgress from "react-page-progress";
const App = () => {
  const content = (
    <div>
      <p>Click to return to top.</p>
    </div>
  );
  return (
    <div className="App">
      <PageProgress color={"skyblue"} height={5} />
      <Popover content={content}>
        <BackTop />
      </Popover>

      <NavBar />
      <PageBackground />
      <AboutMe />
      <Timeline />
      <Skills />
      <Tools />
      <Footer />
    </div>
  );
};

export default App;
