import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const resumeHandler = () => {
    setCurrentPage("Resume");
  };

  const homeHandler = () => {
    setCurrentPage("About");
  };

  const projectHandler = () => {
    setCurrentPage("Projects");
  };

  return (
    <div className="bg-light m-5 rounded border">
      <Header
        page={currentPage}
        resumeHandler={resumeHandler}
        homeHandler={homeHandler}
        projectHandler={projectHandler}
      />
    </div>
  );
}

export default App;
