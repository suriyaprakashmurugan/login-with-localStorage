import React from 'react';
import {Input, Modal} from 'antd';

export default function Edit({editing, resetEditing, setData, edited, setEdited}) {
  return (
    <div>
        <Modal title="Editing student Details"
      visible={editing}
      okText='save'
      
      onCancel={()=>{
        resetEditing()
      }}

      onOk={()=>{
        setData((pre)=>{
          return pre.map((std)=>{
            if(std.id === edited.id)
            {
              return edited;
            }
            else{
              return std;
            }
          })
        })
        resetEditing()
      }}>
        <Input 
          value={edited?.name}
          onChange={(e)=>{
            setEdited((pre)=>{
              return {...pre,name:e.target.value}
            })
          }}/><br/><br/>
        <Input 
          value={edited?.email}
          onChange={(e)=>{
            setEdited((pre)=>{
              return {...pre,name:e.target.value}
            })
          }}/><br/><br/>
        <Input 
          value={edited?.designation}
          onChange={(e)=>{
            setEdited((pre)=>{
              return {...pre,name:e.target.value}
            })
          }}/><br/><br/>
      </Modal>
    </div>
  )
}
