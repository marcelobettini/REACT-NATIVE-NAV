import { useEffect, useState } from 'react';
const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (url) => {
    fetch(url)
      .then(res => res.json(),
        err => {
          throw err
        })
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(
        setTimeout(() => setIsLoading(false), 2000)
      )
  }
  useEffect(() => {
    getData(url)
  }, [])

  return [data, error, isLoading]
}

export default useFetch