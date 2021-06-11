import React, { useContext } from 'react';
import Formation from './Formation';
import Controls from '../components/Controls';
import { Context as GameContext } from '../context/GameContext';

export default function Play({ ground }) {
  const { gameOver } = useContext(GameContext);
  if (!gameOver) {
    return (
      <>
        <Controls ground={ground} />
        <Formation ground={ground} />;
      </>
    );
  } else {
    return <div>GAME OVER</div>;
  }
}