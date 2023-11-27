
function showHouse(houseName) {
    // Hide all houses
    const houses = document.querySelectorAll('.house');
    houses.forEach(house => house.style.display = 'none');

    // Show the selected house
    const selectedHouse = document.getElementById(houseName.toLowerCase());
    if (selectedHouse) {
        selectedHouse.style.display = 'block';
    }
}

// Fetch and enhance the list using house.json data
fetch('houses.json')
    .then(response => response.json())
    .then(data => {
        const houseList = document.getElementById('container');

        data.forEach(house => {
            // Enhance the output with proper semantic HTML and classes
            let objInfo = `<div class="house" id="${house.name.toLowerCase()}">
                <h2 class="house-name">${house.name}</h2>
                <p class="house-members">Members: ${house.members.join(" | ")}</p>
            </div>`;

            houseList.innerHTML += objInfo;
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Fetch and display colors
fetch("https://www.colr.org/json/colors/random/7")
    .then((response) => response.json())
    .then((data) => {
        const colorContainer = document.getElementById("color-container");

        data.colors.forEach((color) => {
            let colorHex = `#${color.hex}`;
            let objInfo = `<div class="color" style="background-color: ${colorHex};">
                <p class="color-hex">${colorHex}</p>
            </div>`;

            colorContainer.innerHTML += objInfo;
        });
    })
    .catch((err) => console.error("Error fetching colors:", err));
