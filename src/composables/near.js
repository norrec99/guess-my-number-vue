import { createGame, formatNEAR, joinGame, viewAllGames, viewGame } from '../services/near';

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    await createGame({ attachedDeposit });
  };

  const handleAllGames = async () => {
    return await viewAllGames();
  };

  const handleGame = async id => {
    return await viewGame(id);
  };

  const handleJoinGame = async (id, { attachedDeposit }) => {
    await joinGame(id, { attachedDeposit });
  };

  const formatAmount = near => {
    return formatNEAR(near);
  };

  return {
    createGame: handleCreateGame,
    formatNEAR: formatAmount,
    joinGame: handleJoinGame,
    viewGame: handleGame,
    viewAllGames: handleAllGames
  };
};
