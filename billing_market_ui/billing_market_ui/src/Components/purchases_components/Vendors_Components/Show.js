import React, { useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function Show() {
  const [users, setUsers] = useState([]);

    async function fetchAllusers(){
       const result= await axios.get('http://localhost:8000/purchase_app/vendors/')
       setUsers(result.data);
    }

    useEffect(()=>{
        fetchAllusers();
    },[])
    
    
  return (
    <>
      <table className='table table-dark'>
            <thead>
                <tr>
                    <th>VENDOR_ID</th>
                    <th>VENDOR_NAME</th>
                    <th>VENDOR_INFORMATION</th>
                    <th>VENDOR_CONTACT</th>
                    <th>VENDOR_GST_NUMBER</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                 <td>{obj.vendor_id}</td>
                                 <td>{obj.vendor_name}</td>
                                 <td>{obj.vendor_information}</td>
                                 <td>{obj.vendor_contact}</td>
                                 <td>{obj.vendor_gst_number}</td>
                                 <td>
                                 <NavLink to={`/update/${obj.vendor_id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                 <NavLink to={`/delete/${obj.vendor_id}`}><button className='btn btn-outline-danger btn-sm me-3'>DELETE</button></NavLink>
                                 </td>
                                 
                </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show;