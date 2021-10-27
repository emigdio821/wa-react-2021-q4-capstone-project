import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'utils/constants';
import axios from 'axios';
import { useLatestAPI } from './useLatestAPI';

const useAxiosRequest = (axParams) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const { ref: apiRef, isLoading: isApiLoading } = useLatestAPI();

  const fetchData = async (params) => {
    const { url: paramUrl } = params;
    const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${paramUrl}`;
    try {
      const result = await axios.get(url, params);
      setData(result.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error?.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (!apiRef || isApiLoading) return () => {};
    const source = axios.CancelToken.source();
    fetchData(axParams);

    return () => {
      source.cancel('axios request cancelled');
    };
  }, [apiRef, isApiLoading]);

  return { data, isLoading };
};

export default useAxiosRequest;
