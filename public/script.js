async function fetchMenu() {
    const response = await fetch('/api/menu');
    const data = await response.json();
    const container = document.getElementById('menu-container');

    container.innerHTML = data.map(item => `
        <div class="menu-item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <strong>$${item.price}</strong>
            <br>
            <button onclick="orderItem('${item.name}',
            '${item.price}')">
             order
            </button>
        </div>
    `).join('');
}

fetchMenu();

function orderItem(name, price) {
  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, price })
  })
  .then(res => res.json())
  .then(data => {
    alert("Order placed for " + name);
  });
}
