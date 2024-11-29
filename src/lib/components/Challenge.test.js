import { render, screen, waitFor } from '@testing-library/svelte';
// @ts-ignore
import Challenge from '$lib/components/Challenge.svelte';

describe('Challenge Component', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });

  it('fetches and displays the first 3 challenges', async () => {
    // Mock API response
    // @ts-ignore
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: 1, title: 'Challenge 1', cost: 100 },
        { id: 2, title: 'Challenge 2', cost: 200 },
        { id: 3, title: 'Challenge 3', cost: 300 },
        { id: 4, title: 'Challenge 4', cost: 400 },
      ])
    );

    // Render the component
    render(Challenge);

    // Wait for the challenges to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Challenge 1')).toBeInTheDocument();
      expect(screen.getByText('Challenge 2')).toBeInTheDocument();
      expect(screen.getByText('Challenge 3')).toBeInTheDocument();
      // Ensure only 3 challenges are displayed
      expect(screen.queryByText('Challenge 4')).not.toBeInTheDocument();
    });
  });

  it('handles fetch failure gracefully', async () => {
    // Mock a failed API response
    // @ts-ignore
    fetch.mockReject(new Error('API is down'));

    // Render the component
    render(Challenge);

    // Check for error logging (replace with proper error UI if needed)
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(expect.any(Error));
    });
  });
});
