import React from 'react';
import { StyledAuthorTile, StyledDescriptionTile, StyledImageTile, StyledTextTile, StyledTile, StyledTileDiv } from './styled';

export const Tile = () => {
   return(
      <StyledTileDiv>
         <StyledTile>
            <StyledImageTile />
            <StyledTextTile>The Design of Everyday Things
               <StyledAuthorTile>Joãozinho</StyledAuthorTile>
            </StyledTextTile>
            <StyledDescriptionTile>Descrição do livro blablablablabalblabal</StyledDescriptionTile>
         </StyledTile>
      </StyledTileDiv>
   );
}