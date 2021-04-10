import React from 'react';
import { StyledHeaderWrapper, StyledHeaderTitle, StyledHeaderImage } from './styled';
import logo from '../../images/logo.png';

export const Header = ({ title = 'Books', ...props }) => {
  return ( // antes do title deve vir uma image, o logo da ioasys no caso
      <StyledHeaderWrapper {...props}>
        <StyledHeaderImage img src={logo} alt="Logo" />
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      </StyledHeaderWrapper>
  );
};