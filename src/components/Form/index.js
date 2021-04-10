import React from 'react';
import { StyledFormWrapper, StyledForm, StyledPasswordInput, StyledEmailInput, StyledButton, EmailInputLabel, PasswordInputLabel } from './styled';

export const Form = ({
   buttonTitle,
   onSubmit,
   handleSubmit,
   register,
   ...props})  =>  {
   return (

      <StyledFormWrapper>
         <StyledForm onSubmit={handleSubmit(onSubmit)}> 
            <StyledEmailInput 
            type="email" 
            name="email"
            {...props}
            {...register('email')}
            />
            <EmailInputLabel htmlFor="email" >Email</EmailInputLabel>
            <StyledPasswordInput 
            type="password" 
            name="password"
            {...props}
            {...register('password')}
            />
            <PasswordInputLabel htmlFor="senha" >Senha</PasswordInputLabel>
            <StyledButton><a href="/books">{buttonTitle}</a></StyledButton>
         </StyledForm>
      </StyledFormWrapper>
   );
}

