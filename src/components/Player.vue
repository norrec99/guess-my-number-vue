<template>
  <div v-for="game in games" :key="game.id" class="grid grid-cols-3 gap-4 max-w-md mx-auto my-10">
    <div v-if="game.state == 1">
      <label for="name" class="ml-px pl-4 block text-sm font-medium text-gray-700">Next Player</label>
      <div class="mt-1">
        <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" :placeholder="game.nextPlayer" />
      </div>
    </div>
    <div v-if="game.state == 1">
      <label for="number" class="block text-sm font-medium text-gray-700">Guess</label>
      <div class="mt-1 relative rounded-full shadow-sm">
        <input v-model="selectedNumber" type="number" name="number" id="number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-full" placeholder="1..10" />
      </div>
    </div>
    <div v-if="game.state == 1">
      <button @click="playGame(game.id, selectedNumber)" type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Go!</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { useGame } from '@/composables/near';

export default {
  setup() {
    const games = ref([]);
    const creationAmount = ref(null);
    const gameError = ref(null);

    const selectedNumber = ref(null);

    console.log('selected number ', selectedNumber.value);

    const { playableGames, play } = useGame();

    onMounted(async () => {
      try {
        await playableGames(games, creationAmount);
      } catch (e) {
        gameError.value = e;
        console.log(gameError.value);
      }
    });

    async function playGame(id, selectedNumber) {
      console.log(selectedNumber.value);
      console.log(id);
      await play(id, selectedNumber);
    }

    return {
      games,
      playGame,
      selectedNumber
    };
  }
};
</script>
