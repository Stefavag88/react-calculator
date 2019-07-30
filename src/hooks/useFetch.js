import { useEffect, useState } from "react";

const useFetch = (url, options, fetchCondition) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const fetchData = async () => {

        console.log(fetchCondition);
        if(!fetchCondition && data) return;
        console.log("FETCHING!!");

        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setData(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    },
    [fetchCondition, data]
  );
  return { data, error};
};

export default useFetch;
