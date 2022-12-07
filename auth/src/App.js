import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import axios from 'axios'

function App() {
  const [inputs,updateInputs] = useState({fullName:'',username:'',email:'',password:''})

  const changeFullName = (e)=>{
    updateInputs({
      fullName:e.target.value
    })
  }
  
  const changeUserName = (e)=>{
    updateInputs({
      username:e.target.value
    })
  }
  
  const changeEmail = (e)=>{
    updateInputs({
      email:e.target.value
    })
  }
  
  const changePassword = (e)=>{
    updateInputs({
      password:e.target.value
    })
  }
  const handleSub=(e)=>{
    e.preventDefault()

    const registered = {
      fullName:inputs.fullName,
      username:inputs.username,
      email:inputs.email,
      password:inputs.password
    }
    axios.post('http://localhost:5000/app/signup',registered)
        .then(res=>console.log(res.data))
      updateInputs({
        fullName:"",
        username:"",
        email:"",
        password:""
      })
  }
  return (
    <Container>
      <form onSubmit={handleSub}>
        <Box><input type="text" placeholder="Full Name" onChange={changeFullName} value={inputs.fullName}/></Box>
        <Box><input type="text" placeholder="UserName" onChange={changeUserName} value={inputs.username}/></Box>
        <Box><input type="text" placeholder="Email" onChange={changeEmail} value={inputs.email}/></Box>
        <Box><input type="password" placeholder="Password" onChange={changePassword} value={inputs.password}/></Box>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
