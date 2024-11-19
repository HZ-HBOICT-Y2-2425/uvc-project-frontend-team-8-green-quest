<script>
   let tasks = [
     { 
       name: 'Water the plants', 
       description: 'Ensure all plants are watered and healthy', 
       coins: Math.floor(Math.random() * 10) + 1, 
       difficulty: 'Easy', 
       co2Savings: 0.5 
     },
     { 
       name: 'Prune the trees', 
       description: 'Trim dead branches and ensure healthy growth', 
       coins: Math.floor(Math.random() * 10) + 1, 
       difficulty: 'Medium', 
       co2Savings: 1.2 
     },
     { 
       name: 'Feed the animals', 
       description: 'Provide food to all the animals in the garden', 
       coins: Math.floor(Math.random() * 10) + 1, 
       difficulty: 'Easy', 
       co2Savings: 0.3 
     },
     { 
       name: 'Collect the honey', 
       description: 'Harvest honey from the beehives', 
       coins: Math.floor(Math.random() * 10) + 1, 
       difficulty: 'Hard', 
       co2Savings: 2.5 
     }
   ];
 
   let currentTaskIndex = 0;

   const nextTask = () => {
     if (currentTaskIndex < tasks.length - 1) {
       currentTaskIndex += 1;
     }
   };
 
   const prevTask = () => {
     if (currentTaskIndex > 0) {
       currentTaskIndex -= 1;
     }
   };
 
   const completeTask = (task) => {
     console.log(`${task.name} completed! Earned ${task.coins} coins and saved ${task.co2Savings}kg of CO2.`);
   };
</script>
 
<div class="bg-light-beige h-screen flex flex-col justify-between">
   <div class="flex items-center justify-center relative">
     <a href="/" class="absolute left-4">
       <img src="/back.png" alt="Back" class="h-6 w-6" />
     </a>
     <h1 class="text-black text-center text-2xl font-bold">TASKS</h1>
   </div>
 
   <div class="flex-grow flex items-start justify-center bg-light-beige pt-20">
     <div class="bg-dark-gray h-96 w-80 rounded-3xl p-5 flex flex-col relative">
       <div class="absolute top-2 left-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-blue-500">
         {tasks[currentTaskIndex].difficulty}
       </div>
       <div class="absolute top-2 right-2 text-sm font-bold text-white px-2 py-1 rounded-md bg-red-500">
         CO2: {tasks[currentTaskIndex].co2Savings} kg
       </div>
 
       <div class="bg-white w-full h-48 flex flex-col items-center justify-between rounded-lg p-4 shadow-md">
         <p class="text-dark-green text-lg font-bold">{tasks[currentTaskIndex].name}</p>
         <p class="text-sm text-dark-green">{tasks[currentTaskIndex].description}</p>
 
         <div class="bg-orange-500 text-white w-full flex items-center justify-between px-2 py-1 rounded-md mt-4">
           <div class="flex items-center gap-1">
             <img src="/coins.png" alt="coins" class="h-4 w-4" />
             <span class="text-sm font-medium">{tasks[currentTaskIndex].coins}</span>
           </div>
 
           <button
             class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
             on:click={() => completeTask(tasks[currentTaskIndex])}
           >
             Complete
           </button>
         </div>
       </div>
 
       <div class="flex justify-between mt-4">
         <button
           class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
           on:click={prevTask}
           disabled={currentTaskIndex === 0}
         >
           Previous
         </button>
 
         <button
           class="bg-light-green text-dark-green rounded-lg py-1 px-3 text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300"
           on:click={nextTask}
           disabled={currentTaskIndex === tasks.length - 1}
         >
           Next
         </button>
       </div>
     </div>
   </div>
 
   <div></div>
</div>
 
<style>
   .bg-light-beige {
     background-color: #f5e6c8;
   }
   .bg-dark-gray {
     background-color: #e4d9b9;
   }
   .bg-dark-green {
     background-color: #3d6b35;
   }
   .bg-light-green {
     background-color: #a8d5a2;
   }
   .text-dark-green {
     color: #3d6b35;
   }
   .text-beige {
     color: #f5e6c8;
   }
   .bg-orange-500 {
     background-color: #f97316;
   }
</style>
