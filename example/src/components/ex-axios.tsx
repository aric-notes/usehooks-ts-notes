import React from 'react';
import useFetch from 'src/hooks/use-fetch'
import useAxios from "../hooks/use-axios";

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const ExFetch = () => {
  console.log('execute ex fetch.', url)
  const {data: quote, loading, error} = useAxios('https://api.quotable.io/random')
  // console.log(data, error)
  return (
    <div className="ex-axios">
      {loading && <p>{loading}</p>}
      {quote && <p>"{quote}"</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ExFetch;
