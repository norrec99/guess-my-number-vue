import { createGame, getGameIds } from '../services/near';
import { ref, onMounted } from 'vue';

const gameError = ref(null);

export const useGame = () => {
  const handleCreateGame = async ({ attachedDeposit }) => {
    createGame({ attachedDeposit });
  };

  const handleGameIds = async () => {
    getGameIds();
  };

  onMounted(async () => {
    try {
      handleGameIds();
      console.log(handleGameIds());
    } catch (e) {
      gameError.value = e;
      console.log(gameError.value);
    }
  });

  return {
    createGame: handleCreateGame,
    getGameIds: handleGameIds
  };
};
