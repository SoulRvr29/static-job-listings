import dataJson from "./data.json";
import Job from "./Job";
import { useState } from "react";

// role
// level
// languages
// tools

function App() {
  const [actualData, changeActualData] = useState(dataJson);
  const [filterItems, changeFilterItems] = useState([]);
  // changeActualData();

  const clearFilter = () => {
    changeFilterItems((items) => (items = []));
    changeActualData((data) => (data = dataJson));
  };

  const removeFilter = (check) => {
    changeFilterItems((arr) => arr.filter((item) => item != check));
    // let returnData = dataJson;
    // returnData = returnData.filter((obj) => {
    //   return (
    //     !obj.role == check &&
    //     !obj.level == check &&
    //     !obj.languages.includes(check) &&
    //     !obj.tools.includes(check)
    //   );
    // });
    // console.log(returnData);
    // changeActualData((data) => (data = [...data, ...returnData]));
  };

  const addFilter = (check) => {
    !filterItems.includes(check) &&
      changeFilterItems((arr) => (arr = [...arr, check]));
    changeActualData((data) =>
      data.filter((obj) => {
        return (
          obj.role == check ||
          obj.level == check ||
          obj.languages.includes(check) ||
          obj.tools.includes(check)
        );
      })
    );
  };

  return (
    <>
      <div className="bkg"></div>
      <div
        className="filter"
        // style={
        //   filterItems.length > 0 ? { display: "flex" } : { display: "none" }
        // }
      >
        <div className="filter-items-container">
          {filterItems.map((item) => (
            <div
              className="filter-item"
              onClick={() => removeFilter(item)}
              key={filterItems.indexOf(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="clear" onClick={clearFilter}>
          Clear
        </div>
      </div>
      {actualData.map((item) => (
        <Job data={item} addFilter={addFilter} key={item.id} />
      ))}
    </>
  );
}

export default App;
