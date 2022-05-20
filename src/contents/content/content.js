import React, { useState, useEffect, useMemo } from 'react';
import Add from './add/add';
import Edit from './edit/edit';
import Head from '../ui/head';
import Footer from '../ui/footer';
import { Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Content() {
    const [data, setData] = useState([
        {
          id: 1,
          name: "suriya",
          designation: "Manager",
          email: "123suriya@gmail.com",
        },
        {
          id: 2,
          name: "prakash",
          designation: "Frontend developer",
          email: "123prakash@gmail.com",
        },
        {
          id: 3,
          name: "karna",
          designation: "Fullstack developer",
          email: "123karna@gmail.com",
        },
        {
          id: 4,
          name: "vignesh",
          designation: "Backend developer",
          email: "123vignesh@gmail.com",
        }
      ]);
      const columns = [
        {
          key: "1",
          title: "ID",
          dataIndex: "id",
          width:40,
          fixed: 'left',
        },
        {
          key: "2",
          title: "Name",
          dataIndex: "name",
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
            key: "3",
            title: "Designation",
            dataIndex: "designation",
        },
        {
          key: "4",
          title: "Email",
          dataIndex: "email",
        },
        
        {
          key:"5",
          title:"Actions",
          render:(record)=>{
            return(
              <>
              <EditOutlined style={{color:'steelblue'}} onClick={() => {onEditStudent(record)}} />
              <DeleteOutlined style={{color:'red',paddingLeft:'20px'}} onClick={() => {onDeleteStudent(record)}} />
              </>
            )
          }
        }
      ];
    
      const [student, setStudent] = useState(false);
      const [editing,setEditing] = useState(false);
      const [edited,setEdited] = useState(null)
    
      //add new student
      const addStudent = () => {
        setStudent(true);
      };
    
      //cancel adding
      const resetAdding = () => {
        // setNewStudent('')
        setStudent(false);
        // console.log(newStudent);
      };
    
      //delete student
      const onDeleteStudent = (record) => {
        Modal.confirm({
          title:'are you want to delete',
          okText:'yes',
          okType:'danger',
          onOk:() => {
            setData((pre)=>{
              return pre.filter((std)=>
                std.id !== record.id
              )
            })
          }
        })
      }
    
      //edit student
      const onEditStudent = (record) => {
        setEditing(true);
        setEdited({...record});
      }
    
      //cancel Editing
      const resetEditing = () => {
        setEditing(false);
      }
      useEffect(()=>{
          setData(JSON.parse(localStorage.getItem('object')))
      }, [])
      useMemo(()=>{
        localStorage.setItem('object',JSON.stringify(data))
      }, [data])
  return (
    <div>
        <Head/>
        <br/>
        <div className="container">

<Button type="primary" className="btn" onClick={addStudent}>
  Add Student
</Button>
<br/>
    <Edit 
    editing={editing}
    student={student}
    resetEditing={resetEditing}
    setData={setData}
    edited={edited}
    setEdited={setEdited}
    />

    <Add
    student={student}
    resetAdding={resetAdding}
    setData={setData}
    />

<Table className='table' columns={columns} dataSource={data} size="small" scroll={{ x: 180 }}></Table>
</div>
        <Footer/>
    </div>
  )
}
