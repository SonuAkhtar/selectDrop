import { useEffect, useState } from "react";

// Imported Components
import Details from "./components/Details/Details";
import Select from "./components/Select/Select";

// API
import { BASE_API } from "./api/appAPI";

function App() {
  const [fetchedData, setFetchedData] = useState([]); // to store all fetched data
  const [detailData, setDetailData] = useState([]); // to store one fetched data
  const [cachedData, setCachedData] = useState({}); // to store cached data

  // Method to fetch All/One data based on type Param passed
  const fetchData = async (name, type) => {
    if (type === "one") {
      if (cachedData[name]) {
        setDetailData(cachedData[name]);
      } else {
        const resultData = await fetch(`${BASE_API}/${name}`)
          .then((res) => res.json())
          .then((data) => data.abilities)
          .catch((err) => console.error("Error :", err));

        setDetailData(resultData);
        setCachedData({ ...cachedData, [name]: resultData });
      }
    } else {
      const resultData = await fetch(BASE_API)
        .then((res) => res.json())
        .then((data) => data.results)
        .catch((err) => console.error("Error :", err));

      setFetchedData(resultData);
    }
  };

  useEffect(() => {
    fetchData(); // Calling function on page load
  }, []);

  const onSelectChange = (name) => {
    fetchData(name, "one"); // Calling function on value selection
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Pokemon Selector</h1>
          <Select fetchedData={fetchedData} onSelectChange={onSelectChange} />
          <Details detailData={detailData} />
        </div>
      </div>
    </>
  );
}

export default App;
