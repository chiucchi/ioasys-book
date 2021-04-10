import styled from 'styled-components';
import background from "../../images/livroex.png";

export const Container =  styled.div`
   mad-width: 1360px;
   margin-right: auto;
   margin-left: auto;
   &:before,
   &:after {
      content: " ";
   display: table;
   }
   &:after {
      clear:both;
   }
`;

export const StyledTileDiv = styled.div`
   position: absolute;
   width: 1136px;
   height: 512px;
   left: 115px;
   top: 120px;

   display: flex
   justify-content: center
`;

export const StyledTile = styled.div`
   width: 272px;
   height: 160px;
   background: #FFFFFF;
   box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
   border-radius: 4px;
   padding: .5rem

`;

export const StyledImageTile = styled.img`
   position: absolute;
   width: 81px;
   height: 122px;
   left: 16px;
   top: 21px;

   background-image: url(${background});
   background-position: center;
   border: none;

   filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`; // colocar background depois

export const StyledTextTile = styled.h1`
   position: absolute;
   width: 127px;
   height: 20px;
   left: 113px;
   top: 16px;

   font-family: Heebo;
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;

   color: #333333;
`;

export const StyledAuthorTile = styled.h1`
   width: 98px;
   height: 40px;
   left: 113px;

   font-family: Heebo;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 20px;

   color: #AB2680;
`;

export const StyledDescriptionTile = styled.p`
   position: absolute;
   width: 104px;
   height: 60px;
   left: 112px;
   top: 84px;

   font-family: Heebo;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 20px;

   color: #999999;      
`;

export const Row = styled.div`
   width: 100%
   float: left;
   height: auto,
   box-sizing: border-box;
   &:before,
   &:after  {
      content:" ";
   display: table;
   }
   &:after  {
      clear: both;
   }
`;

export const Column =  styled.div`
   float: left;
   padding:.25rem;
   min-height: 1px;
   box-sizing: border-box;
   width: 270px;

`;

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 170 px, 284px;
   grid-gap: 5px;
`;