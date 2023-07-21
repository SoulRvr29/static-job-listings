import dataJson from "./data.json";
import Job from "./Job";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [actualData, changeActualData] = useState(dataJson);
  const [filterItems, changeFilterItems] = useState([]);
  let actualFilterItems = [];

  const clearFilter = () => {
    changeFilterItems((items) => (items = []));
    changeActualData((data) => (data = dataJson));
  };

  const removeFilter = (check) => {
    changeFilterItems((arr) => arr.filter((item) => item != check));
    actualFilterItems = [...filterItems.filter((item) => item != check)];
    console.log(actualFilterItems);
    filterActualData();
  };

  const addFilter = (check) => {
    !filterItems.includes(check) &&
      changeFilterItems((arr) => (arr = [...arr, check]));
    actualFilterItems = [...filterItems, check];
    console.log(actualFilterItems);
    filterActualData();
  };

  const filterActualData = () => {
    changeActualData((data) => (data = dataJson));
    for (let i = 0; i < actualFilterItems.length; i++) {
      changeActualData((data) =>
        data.filter((obj) => {
          return (
            obj.role == actualFilterItems[i] ||
            obj.level == actualFilterItems[i] ||
            obj.languages.includes(actualFilterItems[i]) ||
            obj.tools.includes(actualFilterItems[i])
          );
        })
      );
    }
  };
  return (
    <main>
      <div className="bkg"></div>
      <div
        className="filter"
        style={
          filterItems.length
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
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
      <Footer />
    </main>
  );
}

export default App;
