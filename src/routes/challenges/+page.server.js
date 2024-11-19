export const load = async (serverLoadEvent) => {
    try {
        const { fetch } = serverLoadEvent;
        const res = await fetch(`/challenges.json`);
        const items = await res.json();
        return { items };
    } catch (error) {
        return {
            error,
        };
    }
};