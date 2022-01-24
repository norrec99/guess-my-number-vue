<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        Games
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <ul v-for="game in games" :key="game.id">
          <li>
            <div class="py-1">
              <MenuItem class="flex justify-between">
                <div @click="handleJoin(game.id)" class="hover:bg-gray-100 text-gray-900 group flex items-center px-4 py-2 text-sm">
                  {{ game.id }}
                  <span>--------</span>

                  <div class="py-1 px-4 bg-white text-black rounded-full flex justify-center font-bold">
                    <svg fill="none" viewBox="0 0 17.588 17.588" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                      <path
                        d="m8.794 16.588c-1.08 0-2.094-0.204-3.042-0.612-0.936-0.396-1.764-0.948-2.484-1.656-0.708-0.72-1.266-1.548-1.674-2.484-0.396-0.948-0.594-1.962-0.594-3.042s0.198-2.088 0.594-3.024c0.408-0.948 0.966-1.776 1.674-2.484 0.72-0.72 1.548-1.278 2.484-1.674 0.948-0.408 1.962-0.612 3.042-0.612s2.088 0.204 3.024 0.612c0.948 0.396 1.776 0.954 2.484 1.674 0.72 0.708 1.278 1.536 1.674 2.484 0.408 0.936 0.612 1.944 0.612 3.024s-0.204 2.094-0.612 3.042c-0.396 0.936-0.954 1.764-1.674 2.484-0.708 0.708-1.536 1.26-2.484 1.656-0.936 0.408-1.944 0.612-3.024 0.612zm0-1.602c0.864 0 1.668-0.156 2.412-0.468 0.744-0.324 1.398-0.768 1.962-1.332 0.576-0.576 1.02-1.236 1.332-1.98 0.324-0.744 0.486-1.548 0.486-2.412s-0.162-1.668-0.486-2.412c-0.312-0.744-0.756-1.398-1.332-1.962-0.564-0.576-1.218-1.02-1.962-1.332-0.744-0.324-1.548-0.486-2.412-0.486s-1.668 0.162-2.412 0.486c-0.744 0.312-1.404 0.756-1.98 1.332-0.564 0.564-1.008 1.218-1.332 1.962-0.312 0.744-0.468 1.548-0.468 2.412s0.156 1.668 0.468 2.412c0.324 0.744 0.768 1.404 1.332 1.98 0.576 0.564 1.236 1.008 1.98 1.332 0.744 0.312 1.548 0.468 2.412 0.468zm-3.24-2.574v-7.254h2.016l3.024 5.292c0-0.252-6e-3 -0.522-0.018-0.81-0.012-0.3-0.018-0.564-0.018-0.792v-3.69h1.476v7.254h-2.016l-3.06-5.364c0.012 0.24 0.024 0.516 0.036 0.828 0.024 0.312 0.036 0.594 0.036 0.846v3.69z"
                        fill="currentColor"
                      ></path></svg
                    >{{ creationAmount }}
                  </div>
                </div>
              </MenuItem>
            </div>
          </li>
        </ul>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { ref, onMounted, toRaw } from 'vue';

import { useGame } from '@/composables/near';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon
  },
  setup() {
    const games = ref([]);
    const creationAmount = ref(null);
    const gameError = ref(null);

    const { getLastGames, joinGame, formatNEAR } = useGame();

    onMounted(async () => {
      try {
        await getLastGames().then(game => {
          const rawContent = toRaw(game);
          rawContent.map(value => {
            games.value.push(value);
            creationAmount.value = formatNEAR(value.creationAmount);
          });
          console.log(games.value);
        });
      } catch (e) {
        gameError.value = e;
        console.log(gameError.value);
      }
    });

    async function handleJoin(id) {
      console.log(creationAmount.value);
      await joinGame(id, { attachedDeposit: creationAmount.value });
    }

    return {
      getLastGames,
      games,
      gameError,
      creationAmount,
      handleJoin
    };
  }
};
</script>
