const ws = new WebSocket('ws://localhost:8765');
// On successful connection
ws.onopen = function () {
    console.log('WebSocket connection opened');
    // Optionally, you can send an initial message
    ws.send(JSON.stringify({ type: 'join', player: 'Player1' }));
};

// On receiving a message
ws.onmessage = function (event) {
    console.log('Message received from server:', event.data);
    const data = JSON.parse(event.data);
    renderBoard(data);
};

// On WebSocket error
ws.onerror = function (error) {
    console.error('WebSocket error:', error);
};

// On WebSocket close
ws.onclose = function () {
    console.log('WebSocket connection closed');
};

// Function to render the game board
function renderBoard(grid) {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Clear previous board state

    grid.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.textContent = cell;
            board.appendChild(cellDiv);
        });
    });
}
