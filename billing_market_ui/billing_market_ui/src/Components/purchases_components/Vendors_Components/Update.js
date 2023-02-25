import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const {userId} = useParams();
  const {register, setValue, handleSubmit} = useForm();
  const navigate = useNavigate();


  async function fetchUser(){
      const result = await axios.get(`http://localhost:8000/purchase_app/vendors/${userId}/`);
      setValue('vendor_id', result.data.vendor_id);
      setValue('vendor_name', result.data.vendor_name);
      setValue('vendor_information', result.data.vendor_information);
      setValue('vendor_contact', result.data.vendor_contact);
      setValue('vendor_gst_number', result.data.vendor_gst_number);
  }
  const saveData = data => {
      axios.put(`http://localhost:8000/purchase_app/vendors/${userId}/`,data);
      navigate('/show');
  }
  useEffect(()=>{
      fetchUser();
  },[]
  )
  return (

          <div className='container'>
        <center><h1><u>VENDOR UPDATE</u></h1></center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='vid'><b>VENDOR_ID:</b></label>
            <input type='number' id='vid' className='form-control' {...register('vendor_id')} />
            <br/>
            <br/>
            <label htmlFor='vn'><b>VENDOR_NAME:</b></label>
            <input type='text' id='vn' className='form-control' {...register('vendor_name')} />
            <br/>
            <br/>
            <label htmlFor='vi'><b>VENDOR_INFORMATION:</b></label>
            <input type='text' id='vi' className='form-control' {...register('vendor_information')} />
            <br/>
            <br/>
            <label htmlFor='vc'><b>VENDOR_CONTACT:</b></label>
            <input type='phone_number' id='vc' className='form-control' {...register('vendor_contact')} />
            <br/>
            <br/>
            <label htmlFor='vgst'><b>VENDOR_GST_NUMBER:</b></label>
            <input type='text' id='vgst' className='form-control' {...register('vendor_gst_number')} />
            <br/>
            <br/>
            <input type='submit' value='UPDATE VENDOR' className='btn btn-outline-warning col-6'/>
            <input type='reset' value='RESET' className='btn-btn-outline-success col-6'/>
        </form>
    </div>
  
  )
}

export default Update;