import React from 'react';
// Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  height: 40vh;
  object-fit: cover;
  img {
    width: 100%;
  }
`;

export default Game;
