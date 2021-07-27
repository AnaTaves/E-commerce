import React, { useState } from "react"

import FormInput from "../form-input/form-input-component"
import CustomButton from "../custom-button/custom-button-component"


import {signInWithGoogle} from "../../Firebase/firebase"

import { 
  SignInContainer,
  SignInTitle,
  ButtonContainer } from "./sign-in-styles"

  const SignIn = () => {
    
   const [ userCredentials,setCredentials ] = useState({ email:'', password:'' })

    const {email,password} = userCredentials;

    const handleSubmit = async  event => {
      event.preventDefault();
      setCredentials({email:'',password:''})
    };
  
   const handleChange = event => {
      const { value, name } = event.target;
  
      setCredentials({...userCredentials, [name]: value });
    };
  
    
      
      return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='Password'
              required
            />
            <ButtonContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton
              type='button' 
              onClick={signInWithGoogle} 
              isGoogleSignIn>
                Google Sign In
              </CustomButton>
            </ButtonContainer>
          </form>
        </SignInContainer>
      )
  }
  
  export default SignIn;