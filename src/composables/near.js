import { createGame, getLastGames } from '../services/near';
import { ref, onMounted } from 'vue';

const gameError = ref(null);

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    await createGame({ attachedDeposit });
  };

  const handleGames = async () => {
    return await getLastGames();
  };

  onMounted(async () => {
    try {
      await handleGames();
    } catch (e) {
      gameError.value = e;
      console.log(gameError.value);
    }
  });

  return {
    createGame: handleCreateGame,
    getLastGames: handleGames
  };
};
