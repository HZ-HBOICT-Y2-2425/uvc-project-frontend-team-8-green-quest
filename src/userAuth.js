import { goto } from "$app/navigation";  // Import navigation function

// This function checks if the userId is null, if yes, redirects to the login page
export function checkAuth() {
    const userId = localStorage.getItem("userId");
    // If userId is null (i.e., user is not logged in), redirect to login page
    if (!userId) {
        goto("/login");  // Redirect to login page
    }
}