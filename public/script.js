async function fetchMenu() {
    const response = await fetch('http://localhost:3000/api/menu');
    const data = await response.json();
    const container = document.getElementById('menu-container');

    container.innerHTML = data.map(item => `
        <div class="menu-item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <strong>$${item.price}</strong>
        </div>
    `).join('');
}

fetchMenu();
