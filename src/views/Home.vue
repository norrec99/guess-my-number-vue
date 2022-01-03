<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default {
  name: 'App',
  components: {
    Navbar,
    Player,
    CreateGame,
    JoinGame
  }
};
</script>

<style></style>
