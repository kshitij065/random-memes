// Array of meme image URLs
var memeUrls = [
  "https://example.com/meme1.jpg",
  "https://example.com/meme2.jpg",
  "https://example.com/meme3.jpg",
  // Add more meme image URLs here
];

// Function to generate a random meme
function generateMeme() {
  var memeIndex = Math.floor(Math.random() * memeUrls.length);
  var memeImage = document.getElementById("meme-image");
  memeImage.src = memeUrls[memeIndex];
}

// Add event listener to the "Generate" button
var generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateMeme);
