import { createGame } from '../services/near';

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    createGame({ attachedDeposit });
  };

  return {
    createGame: handleCreateGame
  };
};
