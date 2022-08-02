import { useEffect, useState } from "react";

////NOTE: DEPENDENCIES ARGUMENT MUST BE PASSED AS ARRAY.
export const useApi = (urls, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      //If urls is passed as an array, iterate over them and fetch data.
      //Add data from each url to promises array, then set data state to promises array
      if (Array.isArray(urls)) {
        const promises = [];

        for await (const url of urls) {
          const response = await fetch(url);
          const json = await response.json();
          promises.push(json);
        }

        setData(promises);
      }

      //If urls is passed as single url, fetch like normal
      else {
        const response = await fetch(urls);
        const json = await response.json();

        setData(json);
      }

      setLoading(false);
    };

    fetchData();
    console.log("apiData", data);
  }, [...dependencies]);

  return { data, loading, setLoading };
};
