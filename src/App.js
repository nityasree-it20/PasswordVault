 //import {useState} from 'react';
import React from 'react';
import './App.css';
import PasswordManager from './components/password/pass_list/passList';

function App() {
  // const DUMMY_DATA =[
  //   {
  //     id : 'e1',
  //     title : 'Mail ID',
  //     address_ : 'abc@gmail.com',
  //     password_ : '123456'
  //   },
  //   {
  //     id : 'e2',
  //     title : 'LinkedIn ID',
  //     address_ : 'link@gmail.com',
  //     password_ : 'abcd123'
  //   },

  // ];
  // const [passwordList,setpasswordList] = useState(DUMMY_DATA);
  //  const OnAddpassword = (new_password = {}) =>{
  //   setpasswordList((prev_list)=>{
  //     return[...prev_list,new_password]
  //   })
  //  }
  
  
  return (
    <div >
      {/* <NewPassword OnAddpassword = {OnAddpassword}/>
      <Password pass = {passwordList} /> */}
      <PasswordManager />
    </div>
  );
}

export default App;
