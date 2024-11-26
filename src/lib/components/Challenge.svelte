<script>
    // @ts-nocheck
    import { onMount } from 'svelte';

    let challenges = []; // To store the fetched challenges

    // Fetch challenges from the API
    onMount(async () => {
        try {
            const response = await fetch('http://localhost:3010/challenges');
            if (!response.ok) {
                throw new Error('Failed to fetch challenges');
            }
            const allChallenges = await response.json();

            // Take the first 3 challenges
            challenges = allChallenges.slice(0, 3);
        } catch (error) {
            console.error(error);
        }
    });
</script>

<h1 class="text-3xl p-2">Challenges</h1>

<section class="bg-green pl-5 p-5 m-3 rounded-3xl">
    {#each challenges as challenge}
        <div class="bg-beige p-2 mb-2 border border-orange-red rounded-2xl flex flex-row justify-between">
            <a href={`/challenges?id=${challenge.id}`} class="w-full">
                <div class="flex justify-between">
                    <h2 class="text-2xl mt-1">{challenge.title}</h2>
                    <h2 class="text-2xl mt-1">{challenge.difficulty}</h2>
                </div>
            </a>
        </div>
    {/each}
</section>
