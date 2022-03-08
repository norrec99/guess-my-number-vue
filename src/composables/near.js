import { createGame, formatNEAR, joinGame, play, viewAllGames, viewGame } from '../services/near';
import { toRaw } from 'vue';

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    await createGame({ attachedDeposit });
  };

  const handleAllGames = async () => {
    return await viewAllGames();
  };

  const playableGames = async (games, creationAmount) => {
    await viewAllGames().then(game => {
      const rawContent = toRaw(game);
      rawContent.map(value => {
        if (value.state == 0 || value.state == 1) {
          games.value.push(value);
          creationAmount.value = formatNEAR(value.creationAmount);
        }
      });
      console.log(games.value);
      return games;
    });
  };

  const handleGame = async id => {
    return await viewGame(id);
  };

  const handleJoinGame = async (id, { attachedDeposit }) => {
    await joinGame(id, { attachedDeposit });
  };

  const handlePlay = async (id, selectedNumber) => {
    await play(id, selectedNumber);
  };

  const formatAmount = near => {
    return formatNEAR(near);
  };

  return {
    createGame: handleCreateGame,
    formatNEAR: formatAmount,
    joinGame: handleJoinGame,
    play: handlePlay,
    viewGame: handleGame,
    viewAllGames: handleAllGames,
    playableGames
  };
};
