import { useEffect, useState } from "react";

export const useApi = (url, dependencies) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(url);
      const json = await response.json();

      setData(json);

      setLoading(false);
    };

    fetchData();
  }, [dependencies]);

  return { loading, setLoading, data };
};
