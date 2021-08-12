import About from "./About";
import Resume from "./Resume";
import Project from "./Project";

const Renderer = ({ page }) => {
  if (page === "About") {
    return <About />;
  } else if (page === "Resume") {
    return <Resume />;
  } else {
    return <Project />;
  }
};

export default Renderer;
