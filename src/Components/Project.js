let projects = require("./assets/projects.json").projects;

let Projectview = ()=>{
  return (<div className = "p-3 mb-3">
      <h1 className = "text-center"><u>Projects</u></h1>
      {
        projects.map((item, index) =>{
           return <div key ={index}>
             <h1>{index+1}. {item.name} </h1>
          <ul>
            {item.notes.map((note, index)=><li key={index}>{note}</li>)}
          </ul>
          <a href={item.github_repo}> Github</a> {"  "}
          {item.project_link ? <a href={item.project_link}> Link to Website</a>:null} <br />
           </div>}
        )
      }
  </div>)
}

export default Projectview;
