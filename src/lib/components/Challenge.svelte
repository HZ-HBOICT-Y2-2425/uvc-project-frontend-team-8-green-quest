<script>
    	import { onMount } from 'svelte';

	// genericData is an array that will hold the data from the API
	let genericData = [];

	//get date from an api
	onMount(async () => {
		const response = await fetch('http://localhost:3000/api/shop');
		const jsonData = await response.json();
		// only read the data property from the response
		genericData = jsonData.data;
        console.log(jsonData);
	});
</script>

<section class="bg-green pl-5 p-5 m-3 rounded-3xl">
    <div class="bg-beige p-2 mb-2 border border-orange-red rounded-2xl flex flex-row justify-between">
        <h2 class="text-xl mt-2">Challenge 1</h2>
        <div class="flex flex-row">
            <img src="/coins.png" alt="coins" class="w-12 h-fit" />
            <h2 class="text-xl mt-2">4</h2>
        </div>
    </div>

    <div class="bg-beige p-2 mb-2 border border-orange-red rounded-2xl flex flex-row justify-between">
        <h2 class="text-xl mt-2">Challenge 2</h2>
        <div class="flex flex-row">
            <img src="/coins.png" alt="coins" class="w-12 h-fit" />
            <h2 class="text-xl mt-2">2</h2>
        </div>
    </div>

    <div class="bg-beige p-2 mb-2 border border-orange-red rounded-2xl flex flex-row justify-between">
        <h2 class="text-xl mt-2">Challenge 3</h2>
        <div class="flex flex-row">
            <img src="/coins.png" alt="coins" class="w-12 h-fit" />
            <h2 class="text-xl mt-2">1</h2>
        </div>
    </div>
</section>
