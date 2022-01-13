<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Games />
    <CreateGame />
    <JoinGame />
    <Player />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Player from '@/components/Player.vue';
import CreateGame from '@/components/CreateGame.vue';
import JoinGame from '@/components/JoinGame.vue';
import Games from '@/components/Games.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Player,
    CreateGame,
    JoinGame,
    Games
  }
};
</script>

<style></style>
