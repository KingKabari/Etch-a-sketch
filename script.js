
  const container = document.getElementById('container');


  const rows = 16;
  const columns = 16;
  const itemSize = 400 / rows; // grid size item

  // grid items
  for (let i = 0; i < rows * columns; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${itemSize}px`;
    div.style.height = `${itemSize}px`;
    container.appendChild(div);
  }

  // Add mouse event listeners for drawing
        container.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('grid-item')) {
                event.target.style.backgroundColor = 'black';
            }
        });
