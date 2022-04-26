import {useState, useEffect} from 'react';
import axios from 'axios';

function useAxios(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true)
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios.get(url, {cancelToken: source.token})
      .then((res: any) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data.content && setData(res.data.content);
        res.content && setData(res.content);
      })
      .catch(err => {
        setLoading(false)
        setError('An error occurred. Awkward..')
      })
    return () => {
      source.cancel();
    }
  }, [url])

  return {data, loading, error}
}

export default useAxios;
