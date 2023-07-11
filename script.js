// Pure JavaScript code without virtual DOM
const container = document.getElementById('myContainer');
const renderingTimeContainer = document.getElementById('renderingTime');

function createList(data) {
  const startTime = performance.now();

  const ul = document.createElement('ul');
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  container.innerHTML = '';
  container.appendChild(ul);

  const endTime = performance.now();
  const renderingTime = endTime - startTime;
  renderingTimeContainer.textContent = `Rendering time: ${renderingTime} ms`;
}

function updateData() {
  // Simulated data update
  const newData = ['Apple', 'Banana', 'Orange'];
  createList(newData);
}

// Initial UI render
createList(['Initial Data']);

// Triggering data update
setTimeout(() => {
  updateData();
}, 2000);
