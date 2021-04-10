import styled from 'styled-components';
import background from "../../images/2ndbackground.png";

export const StyledHomeWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   background-image: url(${background});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   width: 100vw;
   height: 100vh;

   @media(min-width: 770px){
      height: 100vh;
      width: 100vw;
`;