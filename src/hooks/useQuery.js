import { useEffect, useState } from 'react';

export default function useQuery(fetcherFunction) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [error, setErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await fetcherFunction();
        setData(result);
      } catch (error) {
        setError(true);
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, isError, error };
}

