import React from "react";
import { useSelector,useDispatch } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state=> state.users)
  return (
    <div>
      <ul>
        
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map(user=><li>{user.username}</li>)}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      <div>Total Users: {users.length}</div>
    </div>
  );
}

export default Users;
