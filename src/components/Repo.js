import React from 'react'

function Repo(props) {
  return (
  <div>  
  <h2>User Repositories:</h2>
<ul className="list-group list-2">
      {props.reposInfo  && props.reposInfo.map((value, index)=>{
        return(
          <li className="list-group-item" key={value.id}>
            <a href={value.html_url} target="__blank">{`${index + 1}. `}{`${value.name}: `} </a>
            {value.description}
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default Repo