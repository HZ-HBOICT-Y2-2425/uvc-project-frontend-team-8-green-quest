<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { checkAuth } from "../../userAuth";

    // Navigate back
    function goBack() {
        window.history.back();
    }

    let profileData = [];
    let isLoading = true;

    // Fetch profile data with token validation
    onMount(async () => {
        checkAuth();
        const userId = sessionStorage.getItem("userId");

        isLoading = true;
        try {
            const response = await fetch(`http://localhost:3010/users/profile?userId=${userId}`);

            if (response.ok) {
                const data = await response.json();
                profileData = [data.profile]; // Wrap data in an array for #each
            } else {
                console.error("Failed to fetch profile data");
                alert("Session expired, please log in again.");
                goto("/");
            }
        } catch (error) {
            console.error("Error fetching profile data:", error);
            goto("/");
        } finally {
            isLoading = false;
        }
    });

    // Logout function
    function logout() {
        sessionStorage.removeItem("userId");
        goto("/");
    }
</script>


<!-- Profile Page Design -->
<div class="bg-light-beige flex flex-col justify-between p-5">
    <div class="flex flex-row justify-between relative">
        <a href="/">
            <img
                src="back.png"
                alt="Back"
                class="h-8 w-8 bg-orange-red rounded-full cursor-pointer"
                on:click={goBack}
            />
        </a>
        <h1 class="ml-16 text-2xl font-bold">PROFILE</h1>
        <button class="flex flex-row" on:click={logout}>
            <img src="logout.png" alt="logout" class="h-4 w-4 ml-2 mt-1" />
            <h3 class="text-xl ml-2">Log out</h3>
        </button>
    </div>

    {#if isLoading}
        <p>Loading...</p>
    {:else}
        {#each profileData as { username }}
            <section class="flex flex-col items-center justify-center relative p-2">
                <img src="/profile_icon.png" alt="profile" class="w-64 h-fit" />
                <section class="flex flex-row ml-2">
                    <h2 class="text-xl font-bold">Username:</h2>
                    <h3 class="text-xl ml-2">{username}</h3>
                </section>
            </section>
        {/each}
    {/if}
</div>
<main class="flex flex-col min-h-screen">
    <slot />
</main>