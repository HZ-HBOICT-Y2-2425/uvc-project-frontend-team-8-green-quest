<script>
    async function loadProfile() {
        const token = localStorage.getItem('authToken'); // Fetch the token from local storage

        if (!token) {
            alert('You must be logged in to view your profile.');
            window.location.href = '/login'; // Redirect if token is not found
            return;
        }

        try {
            const response = await fetch('http://localhost:3010/users/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Pass token in the Authorization header
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Profile data:', data.results[0]); // Debug the fetched profile data

                // Populate the profile page dynamically
                document.getElementById('username').innerText = data.results[0].username;
                document.getElementById('challengesCompleted').innerText = data.results[0].challengesCompleted || 0;
                const characteristics = data.results[0].habits || [];
                document.getElementById('characteristicsList').innerHTML = characteristics.length
                    ? characteristics.map((habit) => `<li class="list-disc">${habit}</li>`).join('')
                    : '<li class="list-disc">No habits listed</li>';
            } else {
                alert('Failed to load profile. Please log in again.');
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Error loading profile:', error);
            alert('An error occurred while loading your profile.');
            window.location.href = '/login';
        }
    }

    function goBack() {
        window.history.back();
    }

    // Load the profile data on page load
    window.onload = loadProfile;
</script>

<div class="h-screen bg-light-beige flex flex-col justify-between p-5">
    <div class="flex items-center justify-center relative">
        <a href="/" class="absolute left-4">
            <img
                onclick="goBack()"
                src="back.png"
                alt="Back"
                class="h-8 w-8 bg-orange-red rounded-full"
            />
        </a>
        <h1 class="text-center text-2xl font-bold">PROFILE</h1>
    </div>

    <section class="flex items-center justify-center relative p-2">
        <img src="/profile_icon.png" alt="profile" class="w-64 h-fit" />
    </section>

    <section class="flex flex-row ml-2">
        <h2 class="text-xl font-bold">Username:</h2>
        <h3 id="username" class="text-xl ml-2">Loading...</h3>
    </section>

    <section class="flex flex-row ml-2">
        <h2 class="text-xl font-bold">Challenges completed:</h2>
        <h3 id="challengesCompleted" class="text-xl ml-2">Loading...</h3>
    </section>

    <section class="flex items-center justify-center relative p-2">
        <button id="allChallenges">
            <h2 class="bg-green rounded-full w-40 p-2">See challenges</h2>
        </button>
    </section>

    <section class="ml-2 p-2">
        <h2 class="font-bold">Your characteristics:</h2>
        <ol id="characteristicsList" class="ml-6">
            <li class="list-disc">Loading...</li>
        </ol>
        <div class="flex items-center justify-center relative p-2 mt-2">
            <button id="characteristics">
                <h2 class="bg-green rounded-full w-50 p-2">Change characteristics</h2>
            </button>
        </div>
    </section>

    <section class="flex flex-row">
        <div class="flex items-center justify-center relative p-2">
            <button id="addFriends">
                <h2 class="bg-green rounded-full w-50 p-2">Add friends</h2>
            </button>
        </div>
        <div class="flex items-center justify-center relative p-2">
            <button id="friendsList">
                <h2 class="bg-green rounded-full w-50 p-2">See friends list</h2>
            </button>
        </div>
    </section>
</div>
