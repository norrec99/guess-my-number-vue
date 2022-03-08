<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- <Games /> -->
    <GameList />
    <CreateGame />
    <Player />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Player from '@/components/Player.vue';
import CreateGame from '@/components/CreateGame.vue';
import GameList from '@/components/GameList.vue';
// import Games from '@/components/Games.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Player,
    CreateGame,
    // Games,
    GameList
  }
};
</script>

<style></style>
