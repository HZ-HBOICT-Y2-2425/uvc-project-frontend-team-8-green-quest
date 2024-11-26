// @ts-ignore
export const load = async ({ fetch, url }) => {
    try {
        const id = url.searchParams.get('id'); // Get the 'id' query parameter
        console.log("Fetching challenge with id:", id); // Debugging line to log the id

        if (!id) {
            throw new Error('Challenge ID not provided');
        }

        const response = await fetch(`http://localhost:3010/challenges?id=${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }

        const items = await response.json();
        console.log("Fetched items:", items); // Log the fetched items to see if they match

        return { items: Array.isArray(items) ? items : [items] }; // Ensure items is always an array
    } catch (error) {
        console.error('Failed to fetch challenges:', error);
        return { items: [] };
    }
};
