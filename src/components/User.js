import React from 'react'

function User(props) {
  return (
    <div>
      { props.userInfo &&
        <div className="user">
          <img className='img-user' src={props.userInfo.avatar_url} alt="user-pic" />
          <ul className="list-group list-1" >
            <li className="list-group-item"><strong>Fullname:</strong> {props.userInfo.name}</li>
            <li className="list-group-item"><strong>Username:</strong> {props.userInfo.login}</li>
            <li className="list-group-item"><strong>Location:</strong> {props.userInfo.location}</li>
            <li className="list-group-item"><strong>Email Address:</strong> {props.userInfo.email}</li>
          </ul>
        </div>
        }
    </div>
  )
}

export default User