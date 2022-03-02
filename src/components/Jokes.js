import React from 'react';
import useAxios from '../hooks/useAxios';
import axios from '../apis/dadJokes';

const Jokes = () => {
  const [joke, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/',
    requestConfig: {
      headers: {
        'Content-Language': 'en-US',
      },
    },
  });
  return (
    <article>
      <h1>Random Dad Jokes</h1>
      {loading && <p>Loading....</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && joke && <p>{joke?.joke}</p>}
      {!loading && !error && !joke && <p>No dad joke</p>}

      <button onClick={() => refetch()}>Fetch Joke</button>
    </article>
  );
};

export default Jokes;
