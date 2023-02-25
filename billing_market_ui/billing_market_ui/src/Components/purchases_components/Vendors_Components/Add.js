import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate=useNavigate()

    function saveData(data){
        console.log('Data.........',data);
        axios.post('http://localhost:8000/purchase_app/vendors/', data);
        navigate('/show')
    }
  return (
    <>
        <div className='container'>
        <center><h1><u>VENDOR</u></h1></center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='vid'><b>VENDOR_ID:</b></label>
            <input type='number' id='vid' className='form-control' {...register('vendor_id', {
              required:{
                value:true,
                message:"This Field is Required"
              }
            })} />
            {errors.vendor_id && <p className='text-danger'>{errors.vendor_id?.message}</p>}
            <br/>
            <br/>
            <label htmlFor='vn'><b>VENDOR_NAME:</b></label>
            <input type='text' id='vn' className='form-control' {...register('vendor_name',{
              required:true, 
              maxLength: 20
            })} />
            {errors.vendor_name && <p className='text-danger'>{errors.vendor_name?.message}</p>}
            <br/>
            <br/>
            <label htmlFor='vi'><b>VENDOR_INFORMATION:</b></label>
            <input type='text' id='vi' className='form-control' {...register('vendor_information',{
              required:true,
              maxLength: 40
            })} />
            {errors.vendor_information && <p className='text-danger'>{errors.vendor_information?.message}</p>}
            <br/>
            <br/>
            <label htmlFor='vc'><b>VENDOR_CONTACT:</b></label>
            <input type='phone' id='vc' className='form-control' {...register('vendor_contact',{
              required:true,
              maxLength:13
            })} />
            {errors.vendor_contact && <p className='text-danger'>{errors.vendor_contact?.message}</p>}
            <br/>
            <br/>
            <label htmlFor='vgst'><b>VENDOR_GST_NUMBER:</b></label>
            <input type='text' id='vgst' className='form-control' {...register('vendor_gst_number',{
              required:"This field is required",
              pattern:
              { 
                value : /^[\d]{2}[A-Z]{5}[\d]{4}[A-Z]{1}[\d]{1}Z[A-Z0-9]{1}$/,
                message:"Please Enter Valid GST Number"
            }
            })} />
            {errors.vendor_gst_number && <p className='text-danger'>{errors.vendor_gst_number?.message}</p>}
            <br/>
            <br/>
            <input type='submit' value='ADD VENDOR' className='btn btn-outline-warning col-6'/>
            <input type='reset' value='RESET' className='btn-btn-outline-success col-6'/>
        </form>
    </div>
    </>
  )
}

export default Add