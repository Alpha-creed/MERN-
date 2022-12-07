import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Register = () => {

    const [fname,setFName] = useState("")
    const [file,setFile] = useState("")

    const history = useNavigate()

    const setdata = (e)=>{
        setFName(e.target.value)
    }

    const setImgFile = (e)=>{
            setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData()
        formData.append("photo",file)
        formData.append("fname",fname);

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post("/register",formData,config)
          if(res.data.status == 201){
            history("/")
          }else{
            console.log("error")
          }
      }

  return (
    <>
    <div className="container mt-3">
        <h1>Upload Your Img here</h1>

        <Form>
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Your username"  name="fname" onChange={setdata}/>
       
        <Form.Label>select your image</Form.Label>
        <Form.Control type="file" name="photo"  onChange={setImgFile}/>
 
      <Button variant="primary" type="submit" onClick={addUserData}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register
