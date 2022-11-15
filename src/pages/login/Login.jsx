import React from 'react'
import { LoginContainer, FormContainer, StyledImg, Header, StyledInput, StyledForm, StyledButton } from './Login.style'
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'


const Login = () => {
 const navigate = useNavigate();
 const userInfo = {
  userName:"admin"
 }

 const handleSubmit = (e) =>{
  e.preventDefault();
  sessionStorage.setItem("user",JSON.stringify(userInfo))
  navigate(-1)
 }




  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
        {"<CW/>" }Recipe
        </Header>
        <StyledForm onSubmit={handleSubmit}>

        <StyledInput placeholder="Enter username" type="text"/>
        <StyledInput placeholder="Enter password" type="password"/>
       <StyledButton type="Submit">Login</StyledButton>
        </StyledForm>

      </FormContainer>

    </LoginContainer>
    
  )
}

export default Login