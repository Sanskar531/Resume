import About from "./About";
import Resume from "./Resume";
import Projectview from "./Project";

const Renderer = ({ page }) => {
  if (page === "About") {
    return <About />;
  } else if (page === "Resume") {
    return <Resume />;
  } else {
    return <Projectview />;
  }
};

export default Renderer;
