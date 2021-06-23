import react, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
// Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
