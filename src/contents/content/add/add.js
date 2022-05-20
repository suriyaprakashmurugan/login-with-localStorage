import React from 'react';
import { Modal} from 'antd';
import {useForm} from 'react-hook-form'

export default function Add({student, resetAdding, setData}) {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onFinish = (data) => {
    data["id"] = parseInt(Math.random() * 1000);   
    console.log(data);
    
    setData((pre) => {
      return [...pre, data];
    });
    document.getElementById("btnreset").click();
  }
  const onFinishFailed = () => {
    resetAdding();
  }
  return (
    <div>
        <Modal
        title="Adding Student"
        visible={student}
        okText="Save"
        onCancel={()=>{
          document.getElementById("btnreset").click();
          onFinishFailed();
        }}
        onOk={()=>{
          document.getElementById("btnClick").click();
        }}
      >
            <form 
            id='formId'
            className='formDesign'
            method='post'
            onSubmit={handleSubmit(onFinish)}
            >
              <label>Name<br/>

                <input
                placeholder='Add Name!'
                className='inputDesign'
                name='name'
                type='text'
                {...register("name", {
                  required: true,
                  
                })}
              /><br/>
              </label>
              {errors.Name && <p style={{color:'red'}}>Please input name</p>}
              
              <label>Email<br/>

                <input
                placeholder='Add Email!'
                className='inputDesign'
                name='email'
                type='email'
                {...register("email", {
                  required: true,
                  
                })}
              /><br/>           
              </label>
              {errors.Email && <p style={{color:'red'}}>Please input email id</p>}
              
              <label>Designation<br/>

                <input
                placeholder='Add desgination!'
                className='inputDesign'
                name='designation'
                type='text'
                {...register("designation", {
                  required: true,
                  
                })}
              /><br/>       
              </label>
              {errors.Designation && <p style={{color:'red'}}>Please input Address</p>}
              <button type='submit' id='btnClick' style={{display:'none'}}>Save</button>
              <button type='reset' id='btnreset' style={{display:'none'}}>Cancel</button>
            </form>

        
      </Modal>
    </div>
  )
}