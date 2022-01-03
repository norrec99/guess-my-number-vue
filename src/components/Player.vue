<template>
  <div class="grid grid-cols-3 gap-4 max-w-md mx-auto my-10">
    <div>
      <label for="name" class="ml-px pl-4 block text-sm font-medium text-gray-700">Player 1</label>
      <div class="mt-1">
        <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder="player1.testnet" />
      </div>
      <label for="name" class="ml-px pl-4 block text-sm font-medium text-gray-700">Player 2</label>
      <div class="mt-1">
        <input type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder="player2.testnet" />
      </div>
    </div>
    <div>
      <label for="number" class="block text-sm font-medium text-gray-700">Guess</label>
      <div class="mt-1 relative rounded-full shadow-sm">
        <input type="number" name="number" id="number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-full" placeholder="5" />
      </div>
      <label for="number" class="block text-sm font-medium text-gray-700">Guess</label>
      <div class="mt-1 relative rounded-full shadow-sm">
        <input type="number" name="number" id="number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-full" placeholder="5" />
      </div>
    </div>
    <div>
      <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text</button>
    </div>
    <div>
      <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text</button>
    </div>
  </div>
</template>
