async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    const list = document.getElementById('data-list');

    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      list.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchData);

