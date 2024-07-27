document.addEventListener('DOMContentLoaded', () => {
    fetchArtworks();
    fetchExhibitions();
});

function fetchArtworks() {
    const content = document.getElementById('content');
    content.innerHTML = '';  
    fetch('https://api.artic.edu/api/v1/artworks')
        .then(response => response.json())
        .then(data => displayArtworks(data.data))
        .catch(error => console.error(error));
}

function fetchExhibitions() {
    const content = document.getElementById('content');
    content.innerHTML = '';  
    fetch('https://api.artic.edu/api/v1/exhibitions')
        .then(response => response.json())
        .then(data => displayExhibitions(data.data))
        .catch(error => console.error(error));
}

function displayArtworks(artworks) {
    const content = document.getElementById('content');
    artworks.forEach(artwork => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = 
           `<img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>${artwork.artist_display}</p>
            <p>${artwork.thumbnail.alt_text}</p>`;
             
        
        content.appendChild(box);
    });
}

function displayExhibitions(exhibitions) {
    const content = document.getElementById('content');
    exhibitions.forEach(exhibition => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = 
           `<h3>${exhibition.title}</h3>`;
        content.appendChild(box);
    });
}
