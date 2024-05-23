document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const memeImg = document.getElementById('memeImg');

    // Function to fetch random meme
    async function fetchRandomMeme() {
        try {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const data = await response.json();
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];
            memeImg.src = randomMeme.url;
        } catch (error) {
            console.error('Error fetching meme:', error);
        }
    }

    // Event listener for generate button
    generateBtn.addEventListener('click', fetchRandomMeme);

    // Initial meme fetch when page loads
    fetchRandomMeme();
});
