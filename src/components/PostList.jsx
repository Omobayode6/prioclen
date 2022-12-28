import axios from 'axios';
import React, {useEffect } from 'react';



const PostList = ({filteredDatas, datas, setDatas, isLoading, setIsLoading, error, setError}) => {
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/todos/'
        );
        setDatas(result.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='py-4'>
      {filteredDatas.slice(0, 50).map(item => (
        <div key={item.id} className="mx-auto my-2 py-2 px-4 rounded-md md:w-[60%] text-center bg-[#fff]"> 
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostList;