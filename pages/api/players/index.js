export default async function handler(req, res) {
    const apiUrl = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList';
    const key = process.env.RAPID_API_KEY
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'x-rapidapi-host': `tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com`,
                'x-rapidapi-key': key,
            },
        });

        if (!response.ok) {
            throw new Error(`External API error: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);  // Return the data as a JSON response
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` });
    }
}
