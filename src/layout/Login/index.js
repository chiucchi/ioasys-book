import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { StyledLoginWrapper } from './styled';

export const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [results, setResults] = useState(undefined);
   // const [word, setWord] = useContext(Context);

   const onSubmit = (data) => {
      console.log(data.email);
      console.log(data.password);
      console.log(data);

      /* axios.request({
      method: "get",
      baseURL: "https://books.ioasys.com.br/api/v1/auth/sign-in",
      auth: {
         email: data.email, // This is the client_id
         password: data.password // This is the client_secret
      },
      }).then(respose => {
      console.log(respose);  
      });   */
   };

   return (
         <StyledLoginWrapper>
            <Header></Header>
            <Form 
            buttonTitle="Entrar"
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            />
         </StyledLoginWrapper>
     
         
   );
}