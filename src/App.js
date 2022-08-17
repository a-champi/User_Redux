import './App.css';
import { useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import {addUsers, deleteUser, updateUsername} from "./helped/Users.js"

const  App = ()  => {
  
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState(""); 

  return (
    <div className="App">
      {""}
      <div className='addUser'>
         <input type="text" placeholder=' add Name ..' 
            onChange={(e) => {setName(e.target.value)}} />
         <input type="text" placeholder=' add Username ..' 
            onChange={(e) => {setUsername(e.target.value)}}/>
         <button  className='btn_addUser'
            onClick={() =>{ 
            dispatch(addUsers(
              { id: userList[userList.length-1].id +1, 
                name, username})) } }>
                add User
          </button>
      </div>
      <div >
        {userList.map((user) => { 
          return(
            <div className='display_output'>
              <p>Name: <b>{user.name}</b></p> 
              <p>Username: <b>{user.username}</b></p>

              <div> 
                <input type="text" placeholder=' new Username ..' 
                  onChange={(e) => {setNewUsername(e.target.value)}}/>
                <button  className='btn_updateUser'
                  onClick={(e) => {
                  dispatch(updateUsername({id: user.id, username: newUsername }))}}
                  >{" "} update username</button>
                <button className='btn_deleteUser' 
                    onClick={() => {dispatch(deleteUser({id:user.id}))}}> delete</button>
              </div>

            </div> 
          )
        })}
      </div>
    </div>
  );
}

export default App;
