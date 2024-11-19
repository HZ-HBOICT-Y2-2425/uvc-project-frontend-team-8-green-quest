<script>
  import '../../app.css';

  // Placeholder data for the options
  const options = {
    TREES: ['Oak', 'Pine', 'Maple', 'Birch'],
    BUSHES: ['Rose', 'Hibiscus', 'Azalea', 'Lilac'],
    FLOWERS: ['Sunflower', 'Tulip', 'Daisy', 'Lily'],
    ANIMALS: ['Lion', 'Elephant', 'Tiger', 'Zebra'],
    INSECTS: ['Bee', 'Butterfly', 'Ant', 'Grasshopper']
  };

  // Reactive variable to hold the currently selected category
  let selectedCategory = 'TREES';

  // Update the selected category when a button is clicked
  const selectCategory = (category) => {
    selectedCategory = category;
  };
</script>

<div class="bg-beige h-screen flex flex-col justify-between">
  <!-- Header Section -->
  <h1 class="text-black text-center text-2xl font-bold">SHOP</h1>

  <!-- Middle Green Box -->
  <div class="flex-grow flex items-start justify-center bg-beige pt-20">
    <!-- Green Box -->
    <div class="bg-dark-green h-96 w-80 rounded-3xl p-5 flex">
      <!-- Left Section with Buttons -->
      <div class="w-1/3 flex flex-col justify-center gap-4 pr-4">
        <button
          class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          on:click={() => selectCategory('TREES')}
        >
          TREES
        </button>
        <button
          class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          on:click={() => selectCategory('BUSHES')}
        >
          BUSHES
        </button>
        <button
          class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          on:click={() => selectCategory('FLOWERS')}
        >
          FLOWERS
        </button>
        <button
          class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          on:click={() => selectCategory('ANIMALS')}
        >
          ANIMALS
        </button>
        <button
          class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
          on:click={() => selectCategory('INSECTS')}
        >
          INSECTS
        </button>
      </div>

      <!-- Vertical Divider -->
      <div class="border-l-2 border-black"></div>

      <!-- Right Content Section -->
      <div class="flex-grow flex flex-wrap justify-evenly items-center gap-4 pl-4">
        {#each options[selectedCategory] as item}
          <div class="bg-beige text-dark-green w-[45%] h-20 flex items-center justify-center rounded-lg text-sm font-medium shadow-md">
            {item}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Footer Placeholder -->
  <div></div>
</div>

<style>
  /* Tailwind color customization */
  .bg-beige {
    background-color: #f5e6c8; /* Beige */
  }
  .bg-dark-green {
    background-color: #3d6b35; /* Dark Green */
  }
  .bg-light-green {
    background-color: #a8d5a2; /* Light Green */
  }
  .text-dark-green {
    color: #3d6b35; /* Dark Green Text */
  }
  .text-beige {
    color: #f5e6c8; /* Beige Text */
  }
</style>
