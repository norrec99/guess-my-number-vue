<template>
  <div>
    <button @click="handleCreate" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create a game</button>
    <p v-if="attachedDeposit > 0">You have successfully deposit {{ attachedDeposit }}</p>
    <div class="col-span-6 sm:col-span-6 lg:col-span-3">
      <label for="tip" class="sr-only">Tip</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm"> Ⓝ </span>
        </div>
        <input type="text" v-model="attachedDeposit" id="tip" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0" aria-describedby="message-tip" />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm" id="message-tip"> NEAR </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import { useGame } from '@/composables/near';
export default {
  setup() {
    const attachedDeposit = ref(0);
    const gameId = ref(null);
    const gameError = ref(null);

    const { createGame } = useGame();

    const handleCreate = async () => {
      await createGame({ attachedDeposit: attachedDeposit.value });
    };

    return {
      createGame,
      attachedDeposit,
      handleCreate,
      gameId,
      gameError
    };
  }
};
</script>
