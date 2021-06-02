import React from 'react'

function UserCard({user,CheckoutUser, setShowModal}) {
    return (
        <>
             <div className="edit_inside" key={user.index}>
            
              <img src={user.image} alt="userImage" />
              <div className="person_details">
                  
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Company: {user.company}</p>
              <p>Job Title: {user.job_title}</p>
              <button className="btn-openModal" onClick={()=>{CheckoutUser(user);setShowModal(true)}}>Checkout</button>
              </div>
              
              </div>
        </>
    )
}

export default UserCard
