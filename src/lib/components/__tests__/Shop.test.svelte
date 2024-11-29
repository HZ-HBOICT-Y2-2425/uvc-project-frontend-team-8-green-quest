import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop.svelte";

// Mock fetch globally
global.fetch = jest.fn();

describe("Shop", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("displays a loading message initially", () => {
        render(Shop);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders items after fetching data successfully", async () => {
        const mockData = {
            shop: {
                sections: {
                    trees: [
                        { id: 1, name: "Oak Tree", path: "/oak.png", price: 100, level_required: 1 },
                        { id: 2, name: "Pine Tree", path: "/pine.png", price: 200, level_required: 2 },
                    ],
                },
            },
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        render(Shop); // Just render without passing any props since the default is 'trees'

        // Wait for loading to complete
        await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

        // Check if items are rendered
        expect(screen.getByText("Oak Tree")).toBeInTheDocument();
        expect(screen.getByText("Pine Tree")).toBeInTheDocument();
        expect(screen.getByText("100")).toBeInTheDocument();
        expect(screen.getByText("200")).toBeInTheDocument();
    });

    it("displays a fallback message if no items are found for the category", async () => {
        const mockData = {
            shop: {
                sections: {
                    bushes: [],
                },
            },
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        render(Shop, { selectedCategory: "bushes" }); // Pass props correctly here

        // Wait for loading to complete
        await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

        // Check fallback message
        expect(screen.getByText("No items found for this category.")).toBeInTheDocument();
    });

    it("handles fetch failure gracefully", async () => {
        fetch.mockRejectedValueOnce(new Error("Fetch failed"));

        render(Shop);

        // Wait for loading to complete
        await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

        // Verify no items or error messages are displayed in the UI
        expect(screen.getByText("No items found for this category.")).toBeInTheDocument();
    });

    it("updates items when the selected category changes", async () => {
        const mockData = {
            shop: {
                sections: {
                    trees: [
                        { id: 1, name: "Oak Tree", path: "/oak.png", price: 100, level_required: 1 },
                    ],
                    flowers: [
                        { id: 3, name: "Rose", path: "/rose.png", price: 50, level_required: 1 },
                    ],
                },
            },
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const { component } = render(Shop);

        // Wait for initial category items to load
        await waitFor(() => expect(screen.getByText("Oak Tree")).toBeInTheDocument());

        // Change the category
        component.$set({ selectedCategory: "flowers" });

        // Wait for the new items to render
        await waitFor(() => expect(screen.getByText("Rose")).toBeInTheDocument());
    });
});
