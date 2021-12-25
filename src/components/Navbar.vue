<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div as="nav" class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-end h-16">
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Login />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue';

export default {
  components: {
    Login
  }
};
</script>
