import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Sort from './components/Sort';


function App() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //state to store filter status
  const [status, setStatus] = useState("all")
  //state to filter
  const[filteredDatas, setFilteredDatas] = useState([]);

  //Use Effect
  useEffect(() => {
    filterhandler();
  }, [datas, status]);

  const filterhandler = () =>{
    switch(status){
      case"completed":
        setFilteredDatas(datas.filter(data => data.completed === true));
        break;
      case'uncompleted':
        setFilteredDatas(datas.filter(data => data.completed === false));
        break;
      default:
        setFilteredDatas(datas);
        break;
    }
  }

  return (
    <div className="bg-[#e9ebec] min-h-[100vh] pt-14 px-[5%]">
      <div className='md:flex justify-center gap-4'>
      <SearchBar
        placeholder="Quick Search"
        datas={datas}
        filteredDatas={filteredDatas}
        setFilteredDatas={setFilteredDatas}
      />
      <Sort 
        setStatus ={setStatus}
      />
      </div>
      <PostList 
        datas={datas} 
        setDatas={setDatas}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
        filteredDatas={filteredDatas}
      />
    </div>
  );
}

export default App;
