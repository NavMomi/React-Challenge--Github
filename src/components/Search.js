import React from 'react'
import '../App.css'

function Search(props) {
  return (

  <form>
      <div className='input-group mb-3 input-class'>
        <input type="text" className="form-control" name="search" value={props.search} placeholder="Enter User Name" onChange={props.onChange} />
        <button type="button" className="btn btn-primary" onClick={props.onClick}>Search Button</button>
      </div>
    </form>


  )
}

export default Search