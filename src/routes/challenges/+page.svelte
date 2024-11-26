<div class="flex flex-col justify-between">
  <div class="flex flex-row p-4 justify-between">
    <a href="/">
      <img
        src="/back.png"
        alt="Back"
        class="h-8 w-8 bg-orange-red rounded-full"
      />
    </a>
    <h1 class="text-black text-center text-2xl font-bold">CHALLENGE</h1>
    <div class="flex flex-row justify-between">
      <img src="/coins.png" alt="coins" class="w-10 h-fit" />
      <span class="text-2xl mt-1 text-right">5</span>
    </div>
  </div>

  <div class="flex items-start justify-center p-5">
    <div class="bg-dark-gray h-96 w-80 rounded-3xl p-5 flex flex-col relative">
      <div
        class="absolute top-2 left-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-blue-500"
      >
        Easy
      </div>
      <div
        class="absolute top-2 right-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-red-500"
      >
        CO2: 0.5 kg
      </div>

      <div
        class="bg-white w-full h-48 flex flex-col items-center justify-between rounded-lg p-4 shadow-md"
      >
        <p class="text-dark-green text-lg font-bold">Water the plants</p>
        <p class="text-sm text-dark-green">
          Ensure all plants are watered and healthy
        </p>

        <div
          class="bg-orange-red text-white w-full flex items-center justify-between px-2 py-1 rounded-md mt-4"
        >
          <div class="flex items-center gap-1">
            <img src="/coins.png" alt="coins" class="h-4 w-4" />
            <span class="text-sm font-medium">5</span>
          </div>

          <button
            class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          >
            Complete
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-4">
        <button
          class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          disabled
        >
          Previous
        </button>

        <button
          class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          disabled
        >
          Next
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-light-beige {
    background-color: #f5e6c8;
  }
  .bg-dark-gray {
    background-color: #e4d9b9;
  }
  .bg-dark-green {
    background-color: #3d6b35;
  }
  .bg-light-green {
    background-color: #a8d5a2;
  }
  .text-dark-green {
    color: #3d6b35;
  }
  .text-beige {
    color: #f5e6c8;
  }
  .bg-orange-500 {
    background-color: #f97316;
  }
</style>
