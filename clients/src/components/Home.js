import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from 'moment';
import Alert from 'react-bootstrap/Alert';


const Home = () => {

  const [data,setData] = useState([])
  const [show,setshow] = useState(false)
  const getUserdata = async()=>{
    const res = await axios.get("/getdata",{
      headers:{
        "Content-Type":"application/json"
      }
    })
    if(res.data.status == 201){
      console.log("data get")
      setData(res.data.data)
    }else{
      console.log("error")
    }
    
  }

  const dltUser = async(id)=>{
    console.log(id)
    const res = await axios.delete(`/${id}`,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    if(res.data.status == 201){
        getUserdata()
        setshow(true)
    }else{
      console.log("error")
    }
  }

  useEffect(()=>{
    getUserdata()
  },[])

  return (
    <>
        {
          show ? <Alert variant='danger' onClose={()=> setshow(false)} dismissible>
            User deleted
          </Alert>:""
        }
      <div className="container mt-2">
        <h1 className='text-center mt-2'> Image Upload Project with Mysql database</h1>
      
        <div className="text-end">
            <Button variant="primary"><NavLink to ="/register" className="text-decoration-none text-light">Add User</NavLink></Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
          {
             data.length > 0 ? data.map((el,i)=>{
              return (
                <>
                  <Card style={{ width: '22rem',height:"18rem" }} className="mb-3">
                    <Card.Img variant="top" src={`/assests/${el.Picture}`} style={{width:'100px',textAlign:"center",margin:"auto"}} className="mt-2"/>
                      <Card.Body>
                        <Card.Title>UserName:{el.Name}</Card.Title>
                        <Card.Text>
                            Date Added:{moment(el.date).format("DD-MM-YYYY")}
                        </Card.Text>
                        <Button variant="danger" onClick={()=>dltUser(el.id)} className="col-lg-6 text-center">Delete</Button>
                      </Card.Body>
                    </Card>
                </>
              )
            }):""
          }
        </div>
      </div>
    </>
  )
}

export default Home
