import { createGame, getLastGames, formatNEAR, joinGame } from '../services/near';
import { ref, onMounted } from 'vue';

const gameError = ref(null);

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    await createGame({ attachedDeposit });
  };

  const handleGames = async () => {
    return await getLastGames();
  };

  const handleJoinGame = async (id, { attachedDeposit }) => {
    await joinGame(id, { attachedDeposit });
  };

  onMounted(async () => {
    try {
      await handleGames();
    } catch (e) {
      gameError.value = e;
      console.log(gameError.value);
    }
  });

  const formatAmount = near => {
    return formatNEAR(near);
  };

  return {
    createGame: handleCreateGame,
    getLastGames: handleGames,
    formatNEAR: formatAmount,
    joinGame: handleJoinGame
  };
};
