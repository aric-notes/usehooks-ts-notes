import React from 'react';
import useFetch from 'src/hooks/use-fetch'

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const ExFetch = () => {
  const {data, error} = useFetch<Post[]>(url, {})
  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return <p>{data[0].title}</p>
};

export default ExFetch;
