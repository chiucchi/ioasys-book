import React, { useContext, useState } from 'react';
import { StyledHomeWrapper } from './styled';
import { HomeHeader } from '../../components/HomeHeader';
import { Tile } from '../../components/Tile';
import { Container, Grid } from '../../components/Tile/styled';

export const Home = () => {
   return(
      <Container>
         <StyledHomeWrapper>
            <HomeHeader>
            </HomeHeader>
            <Grid>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
               <Tile></Tile>
            </Grid>
         </StyledHomeWrapper>
      </Container>
   );
}