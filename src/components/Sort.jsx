import React from 'react';
import "./Sort.css"

function Sort({setStatus}) {
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
  return (
    <form>
      <div className="select mt-4 md:mt-0">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Sort;