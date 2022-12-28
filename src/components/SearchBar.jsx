import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import './SearchBar.css'

function SearchBar({datas, setFilteredDatas,  placeholder, filteredDatas }){
  const [inputText, setInputText ] = useState("");

  const handleFilter = (event) =>{
    const searchWord = event.target.value;
    setInputText(searchWord)
    const newFilter = datas.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    // set the filteredword to empty after cleaning the search bar
    if(searchWord ===""){
      setFilteredDatas(datas)
    }else
    setFilteredDatas(newFilter)
  }
  
  const handleClear = () => {
    setFilteredDatas(datas);
    setInputText("")
  }

  return (
    <div className='search mx-auto md:mx-0'>
      <div className='searchInputs '>
        <input type="text" placeholder={placeholder} value= {inputText} onChange={handleFilter}/>
        <div className='searchIcon'>
          {inputText.length === 0 ? <SearchIcon /> : 
            <ClearIcon id="clearBtn" onClick={handleClear}/>
          }
        </div>
      </div>
      
    </div>
  )
}

export default SearchBar