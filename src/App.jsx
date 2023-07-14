import data from "./data.json";
import Job from "./Job";

function App() {
  return (
    <>
      <div className="bkg"></div>
      <div className="filter">
        <span className="filter-item">Frontend</span>
        <span className="filter-item">CSS</span>
        <span className="filter-item">JavaScript</span>
      </div>
      {data.map((item) => (
        <Job
          company={item.company}
          position={item.position}
          isNew={item.new}
          featured={item.featured}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          languages={item.languages}
          logo={item.logo}
        />
      ))}
    </>
  );
}

export default App;
