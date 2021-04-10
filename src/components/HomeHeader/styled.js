import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
   position: absolute;
   width: 1130px;
   height: 40px;
   left: 115px;
   top: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const StyledHeaderBlock = styled.div`
   position: absolute;
   height: 40px;
   width: 200px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const StyledHeaderImage = styled.img`
   left: 8.42%;
   right: 83.94%;
   top: 5.47%;
   bottom: 89.84%;
`;

export const StyledHeaderTitle = styled.h1`
   width: 77px;
   height: 40px;
   left: 236px;
   top: 40px;

   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: 300;
   font-size: 28px;
   line-height: 40px;

   color: #000000;
`;

export const StyledUserHeader =  styled.div`
   position: absolute;
   width: 150px;
   height: 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const StyledUserText = styled.h1`
   position: absolute;
   width: 121px;
   height: 16px;
   left: 1076px;

   font-family: 'Heebo', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 16px;

   /* identical to box height, or 133% */
   text-align: right;

   color: #333333;
`;

export const StyledUserButton = styled.button`
   position: absolute;
   left: 91.14%;
   right: 6.52%;
   bottom: 90.1%;

   border: 1px solid rgba(51, 51, 51, 0.2);
   box-sizing: border-box;
`;