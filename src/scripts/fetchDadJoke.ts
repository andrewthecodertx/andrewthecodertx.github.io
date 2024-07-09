interface DataItem {
  id: number;
  author: string;
  joke_text: string;
}

async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://dadjokes.developersafe.io/api/random');
    const data: DataItem[] = await response.json();
    const list = document.getElementById('data-list') as HTMLUListElement;

    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.joke_text;
      list.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchData);
