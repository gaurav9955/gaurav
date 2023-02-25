import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Delete() {
  const {userId} = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState({});


  async function fetchUser(){
      const result = await axios.get(`http://localhost:8000/purchase_app/vendors/${userId}`);
      setUser(result.data);
  }
  function deleteUser(){
      axios.delete(`http://localhost:8000/purchase_app/vendors/${userId}`);
      navigate('/show')
  }

  useEffect(()=>{
      fetchUser();
  },[])
  return (
    <>
      <div className='container'>
        <center><u><h1>DELETE CONFIRMATION</h1></u>

        <form onSubmit={()=>deleteUser()} className='mt-5'>
            <h3>Do you want to delete<span style={{color: "red"}}>{user.vendor_id} {user.vendor_name} {user.vendor_information} {user.vendor_contact} {user.vendor_gst_number}</span>Record?</h3>

            <input type="submit" value="YES" className="btn btn-outline-danger col-3"/>
            <NavLink to='user/show'><input type="button" value="NO" className='btn  btn-outline-warning col-3'/></NavLink>
        </form>
        </center>
      </div>
    </>
  )
}

export default Delete