<!-- This example requires Tailwind CSS v2.0+ -->
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
        <ul v-for="game in games" :key="game.gameId">
          <li>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                  <PencilAltIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  {{ game.gameId }}
                </a>
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
import { ChevronDownIcon, PencilAltIcon } from '@heroicons/vue/solid';

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    // ArchiveIcon,
    // ArrowCircleRightIcon,
    ChevronDownIcon,
    // DuplicateIcon,
    // HeartIcon,
    PencilAltIcon
    // TrashIcon,
    // UserAddIcon
  },
  setup() {
    const games = ref([]);
    const gameError = ref(null);

    const { getLastGames } = useGame();

    onMounted(async () => {
      try {
        await getLastGames().then(game => {
          const rawContent = toRaw(game);
          rawContent.map(value => {
            games.value.push(value);
          });
          console.log(games.value);
        });
      } catch (e) {
        gameError.value = e;
        console.log(gameError.value);
      }
    });

    return {
      getLastGames,
      games,
      gameError
    };
  }
};
</script>
