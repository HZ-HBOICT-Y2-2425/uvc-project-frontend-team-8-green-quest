<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  export let data;
  
  // Extracting the challenge id from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  console.log("URL id:", id); // Log the id from the URL
  console.log("Available challenges:", data.items); // Log the fetched challenge data
  
  let task = null;

  if (data.items && data.items.length) {
      // Convert id from URL and compare it to the challenge id
      task = data.items.find(t => t.id.toString() === id);  // Convert both to strings to ensure a match
  }

  if (!task) {
      task = { title: "Challenge not found", description: "No details available." };
  }
</script>

<div class="bg-light-beige h-screen flex flex-col justify-between">
  <div class="flex items-center justify-center relative">
      <a href="/" class="absolute left-4">
          <img src="/back.png" alt="Back" class="h-6 w-6" />
      </a>
      <h1 class="text-black text-center text-2xl font-bold">TASK DETAILS</h1>
  </div>

  <div class="flex-grow flex items-start justify-center bg-light-beige pt-20">
      <div class="bg-dark-gray h-96 w-80 rounded-3xl p-5 flex flex-col relative">
          <div class="absolute top-2 left-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-blue-500">
              {task.difficulty}
          </div>
          <div class="absolute top-2 right-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-red-500">
              CO2: {task.CO2_reduction_kg} kg
          </div>

          <div class="bg-white w-full h-48 flex flex-col items-center justify-between rounded-lg p-4 shadow-md">
              <p class="text-dark-green text-lg font-bold">{task.title}</p>
              <p class="text-sm text-dark-green">{task.description}</p>

              <div class="bg-orange-500 text-white w-full flex items-center justify-between px-2 py-1 rounded-md mt-4">
                  <div class="flex items-center gap-1">
                      <img src="/coins.png" alt="coins" class="h-4 w-4" />
                      <span class="text-sm font-medium">{task.coins}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
