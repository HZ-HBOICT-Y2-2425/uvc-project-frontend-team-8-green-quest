<script>
    import { onMount } from 'svelte';
  
    let challenges = [];
    let selectedChallenge = null; // Holds the selected challenge for the modal
    let showModal = false; // Controls whether the modal is visible
  
    async function fetchChallenges() {
      try {
        const response = await fetch('http://localhost:3010/challenges');
        const data = await response.json();
        challenges = data.sort(() => Math.random() - 0.5).slice(0, 3);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    }
  
    const openModal = (challenge) => {
      selectedChallenge = challenge;
      showModal = true;
    };
  
    const closeModal = () => {
      selectedChallenge = null;
      showModal = false;
    };
  
    onMount(() => {
      fetchChallenges();
    });
  </script>
  
  <!-- Main Content -->
  <main class="p-5">
    <section class="bg-green pl-5 p-5 m-3 rounded-3xl">
      {#each challenges as challenge}
        <div
          class="bg-beige p-2 mb-2 border border-orange-red rounded-2xl flex flex-row justify-between cursor-pointer"
          on:click={() => openModal(challenge)}
        >
          <h2 class="text-2xl mt-1">{challenge.title}</h2>
          <div class="flex flex-row">
            <img src="/coins.png" alt="coins" class="w-12 h-fit" />
            <h2 class="text-2xl mt-1">{challenge.CO2_reduction_kg}</h2>
          </div>
        </div>
      {/each}
    </section>
  </main>
  
  <!-- Modal -->
  {#if showModal}
    <div
      class="fixed inset-0 z-50 flex flex-col justify-between bg-light-beige"
    >
      <!-- Navbar -->
      <header class="bg-green flex justify-between items-center p-3 w-full">
        <div class="flex flex-row items-center">
          <img src="/coins.png" alt="coins" class="w-12 h-fit" />
          <h2 class="text-2xl mt-1 ml-2">2</h2>
        </div>
        <h2 class="text-3xl mt-1">CO2: 55</h2>
        <button id="profile" class="ml-auto">
          <img src="/profile_icon.png" alt="profile" class="w-12 h-fit" />
        </button>
      </header>
  
      <!-- Modal Content -->
      <div class="flex-grow flex flex-col justify-center items-center p-5">
        <div class="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-xl p-5 shadow-lg relative">
          <!-- Close Button -->
          <button class="absolute top-2 right-2 text-dark-green font-bold text-lg" on:click={closeModal}>
            ✖
          </button>
  
          <!-- Top Section -->
          <div class="flex items-center justify-between mb-5">
            <div class="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold">
              {selectedChallenge.difficulty}
            </div>
            <h1 class="text-dark-green text-2xl font-bold">Tasks</h1>
            <div class="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-bold">
              CO2: {selectedChallenge.CO2_reduction_kg} kg
            </div>
          </div>
  
          <!-- Main Content -->
          <div class="bg-light-beige rounded-lg shadow-md p-5">
            <h2 class="text-dark-green text-xl font-bold mb-3">{selectedChallenge.title}</h2>
            <p class="text-sm text-dark-green">{selectedChallenge.description}</p>
          </div>
  
          <!-- Button Section -->
          <div class="mt-5 flex justify-center">
            <div class="bg-orange-500 text-white flex items-center justify-between px-4 py-2 rounded-lg w-full max-w-md">
              <div class="flex items-center gap-1">
                <img src="/coins.png" alt="coins" class="h-6 w-6" />
              </div>
              <button
                class="bg-light-green text-dark-green px-4 py-2 rounded-lg text-lg font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
                on:click={() => {
                  console.log(`${selectedChallenge.title} completed!`);
                  closeModal();
                }}
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-green flex justify-between items-center p-3 w-full">
        <button id="shop">
          <a href="/shop">
            <img src="/shop.png" alt="shop" class="w-12 h-fit" />
          </a>
        </button>
        <button id="leaderboard">
          <h2 class="text-3xl p-2 bg-orange-red rounded-3xl">Leaderboard</h2>
        </button>
        <a id="info" href="/info">
          <img src="/info.png" alt="information" class="w-10 h-fit bg-orange-red rounded-3xl" />
        </a>
      </footer>
    </div>
  {/if}
  
  <style>
    /* General Colors */
    .bg-light-beige {
      background-color: #f5e6c8;
    }
    .bg-green {
      background-color: #3d6b35;
    }
    .bg-beige {
      background-color: #e4d9b9;
    }
    .text-dark-green {
      color: #3d6b35;
    }
  
    /* Modal Specific Colors */
    .bg-orange-500 {
      background-color: #f97316;
    }
    .bg-blue-500 {
      background-color: #3b82f6;
    }
    .bg-red-500 {
      background-color: #ef4444;
    }
    .bg-light-green {
      background-color: #a8d5a2;
    }
    .hover\:bg-dark-green:hover {
      background-color: #3d6b35;
    }
    .hover\:text-beige:hover {
      color: #f5e6c8;
    }
  
    /* Ensure proper alignment */
    header img,
    footer img {
      display: inline-block;
    }
  </style>
  