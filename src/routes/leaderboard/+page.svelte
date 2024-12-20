<script>
  let selectedTab = "global";

  const selectTab = (tab) => {
    selectedTab = tab;
  };

  const globalUsers = [
    { name: "Chavdar", level: 15 },
    { name: "Joao", level: 13 },
    { name: "Deodato", level: 12 },
    { name: "Pereira", level: 9 },
  ];

  const friendsUsers = [];
</script>

<div class="flex flex-col h-screen bg-beige">
  <!-- Header -->
  <div class="flex flex-col justify-between p-5">
    <div class="flex items-center justify-center relative">
      <a href="/" class="absolute left-4">
        <img src="/back.png" alt="Back" class="h-8 w-8 bg-orange-red rounded-full" />
      </a>
      <h1 class="text-black text-center text-2xl font-bold">LEADERBOARD</h1>
    </div>
  </div>

  <!-- Main Content -->
  <div class="mt-2 px-4">
    <div class="bg-darker-green rounded-xl w-full max-w-md p-4 mx-auto flex">
      <!-- Tabs Section -->
      <div class="w-1/3 flex flex-col gap-4 pr-4">
        <button
          class={`p-2 rounded-full text-sm font-bold border-2 ${
            selectedTab === "global"
              ? "bg-green text-black border-orange-red"
              : "bg-green text-black border-darker-green"
          }`}
          on:click={() => selectTab("global")}
        >
          GLOBAL
        </button>
        <button
          class={`p-2 rounded-full text-sm font-bold border-2 ${
            selectedTab === "friends"
              ? "bg-green text-black border-orange-red"
              : "bg-green text-black border-darker-green"
          }`}
          on:click={() => selectTab("friends")}
        >
          FRIENDS
        </button>
      </div>

      <!-- Divider -->
      <div class="border-l-2 border-black"></div>

      <!-- Leaderboard Content -->
      <div class="flex-grow ml-4 bg-darker-green p-3 rounded-xl">
        {#if selectedTab === "global"}
          <ul class="text-black text-sm leading-6">
            {#each globalUsers as user, index}
              <li class="flex justify-between py-1">
                <span>{index + 1}. {user.name}</span>
                <span>LV: {user.level}</span>
              </li>
            {/each}
          </ul>
        {/if}
        {#if selectedTab === "friends"}
          <ul class="text-black text-sm text-center">
            {#if friendsUsers.length > 0}
              {#each friendsUsers as user, index}
                <li class="flex justify-between py-1">
                  <span>{index + 1}. {user.name}</span>
                  <span>LV: {user.level}</span>
                </li>
              {/each}
            {:else}
              <li>No friends data available.</li>
            {/if}
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>
