// Request for Truck Form
const requestForm = document.querySelector('.request-form');
requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const address = document.querySelector('#address').value;
    const wasteType = document.querySelector('#waste-type').value;
    // send request to server to schedule truck pickup
    console.log(`Request submitted: ${name}, ${address}, ${wasteType}`);
});

// Find Nearby Smart Bins
const findBinsBtn = document.querySelector('#find-bins-btn');
findBinsBtn.addEventListener('click', () => {
    // use geolocation API to get user's location
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // use API to find nearby smart bins
        fetch(`https://api.example.com/nearby-bins?lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                // process the data and display nearby smart bins
                console.log('Nearby smart bins:', data);
            })
            .catch(error => {
                console.error('Error fetching nearby bins:', error);
            });
    });
});
