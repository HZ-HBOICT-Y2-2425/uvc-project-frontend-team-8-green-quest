<script>
// @ts-nocheck

    import { onMount } from "svelte";
  
    export let selectedCategory = "trees";
  
    let shopData = {};
    let items = [];
    let isLoading = true;
  
    onMount(async () => {
      try {
        const response = await fetch("http://localhost:3010/items");
        const data = await response.json();
        shopData = data.shop.sections || {}; 
  
        items = shopData[selectedCategory.toLowerCase()] || [];
      } catch (error) {
        console.error("Failed to fetch shop data:", error);
      } finally {
        isLoading = false;
      }
    });
  
    $: items = shopData[selectedCategory.toLowerCase()] || [];
  </script>
  
  <div class=" flex flex-wrap justify-evenly items-center">
    {#if isLoading}
      <p>Loading...</p>
    {:else if items.length === 0}
      <p>No items found for this category.</p>
    {:else}
      {#each items as { id, name, path, price, level_required }}
        <div
          class="bg-beige w-[45%] h-40 flex flex-col items-center justify-between rounded-lg p-2 shadow-md"
          key={id}
        >
          <!-- Image -->
          <img src={path} alt={name} class="h-16 w-auto" />
  
          <!-- Brown/Orange Box -->
          <div
            class="bg-orange-500 text-white w-full flex items-center justify-between px-2 py-1 rounded-md"
          >
            <!-- Name -->
            <p class="text-sm font-medium">{name}</p>
            <!-- Coins -->
            <div class="flex items-center gap-1">
              <img src="/coins.png" alt="coins" class="h-4 w-4" />
              <span class="text-sm font-medium">{price}</span>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
  
  <style>
    .bg-beige {
      background-color: #f5e6c8;
    }
  </style>
  