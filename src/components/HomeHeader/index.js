import React from 'react';
import { StyledHeaderWrapper, StyledHeaderTitle, StyledHeaderImage, StyledHeaderBlock, StyledUserHeader, StyledUserText, StyledUserButton } from './styled';
import logo from '../../images/logopreto.png';

export const HomeHeader = ({ title='Books', nome = 'Guilherme', ...props }) => {
  return ( 
      <StyledHeaderWrapper {...props}>
        <StyledHeaderBlock>
          <StyledHeaderImage img src={logo} alt="Logo" />
          <StyledHeaderTitle>{title}</StyledHeaderTitle>
        </StyledHeaderBlock>
          <StyledUserText>Bem vindo, {nome}!</StyledUserText>
      </StyledHeaderWrapper>
  );
};