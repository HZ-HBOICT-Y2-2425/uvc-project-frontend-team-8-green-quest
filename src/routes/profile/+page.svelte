<script>
    function goBack() {
        window.history.back();
    }
</script>

<div class="bg-light-beige flex flex-col justify-between p-5">
    <div class="flex items-center justify-center relative">
        <a href="/" class="absolute left-4">
            <img
                on:click={goBack}
                src="back.png"
                alt="Back"
                class="h-8 w-8 bg-orange-red rounded-full"
            />
        </a>
        <h1 class="text-center text-2xl font-bold">PROFILE</h1>
    </div>

    <section class="flex items-center justify-center relative p-5">
        <img src="/profile_icon.png" alt="profile" class="w-36 h-fit" />
    </section>

    <section class="flex flex-row ml-2">
        <h2 class="text-xl font-bold">Username:</h2>
        <h3 class="text-xl ml-2">Name</h3>
    </section>

    <section class="flex flex-row ml-2">
        <h2 class="text-xl font-bold">Challenges completed:</h2>
        <h3 class="text-xl ml-2">20</h3>
    </section>

    
</div>

<section class="flex items-center justify-center relative p-2">
<h2 class="bg-green rounded-full w-40 p-2">See challenges</h2>    
</section>
