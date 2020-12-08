import {useState, useEffect} from 'react';

const UseAmadeus = (initialUrl) => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      // check if we have an url for the initial render
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
      // dependency array 
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default UseAmadeus;