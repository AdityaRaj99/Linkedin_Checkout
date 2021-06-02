import React from 'react';
import data from "./data/data.json";
import  { useState } from 'react';
import { Modal } from './component/Modal/Modal';
import { useHistory } from 'react-router';
import UserCard from './component/userCard';

function Home() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
 const [userData, setUserData] = useState([]);


  function logout(){
    localStorage.setItem("user",JSON.stringify(false))
    history.push("/")
  }

  function CheckoutUser(user){
    setUserData(user)
  }

  return (<>
    <Modal user={userData} show={showModal} setShowModal={setShowModal} />
    <div className="main-div">
      <div className="datas">
       <div style={{display:'flex',justifyContent:"space-evenly",paddingLeft: "35%",    backgroundColor:"black",color: "white"}}> <h2>Linkedin Accounts</h2>   <button className="logout" onClick={logout}>Logout</button></div><br />
       <div style={{display:"flex",flexWrap: 'wrap',justifyContent:"center",gap:"25px 25px"}}> {data.map(user => {
          return (
           <UserCard user={user} CheckoutUser={CheckoutUser} setShowModal={setShowModal}/>
        )}) }</div>
            
            
      </div>
    </div>
    </>
  )
}
export default Home;