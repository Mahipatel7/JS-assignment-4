document.getElementById('fetchCatImage').addEventListener('click', fetchCatImage);

function fetchCatImage() {
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const catImageResultsDiv = document.getElementById('catImageResults');
            catImageResultsDiv.innerHTML = `
                <h2>Here's a random cat for you!</h2>
                <img src="${data[0].url}" alt="Random Cat" width="300">
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}