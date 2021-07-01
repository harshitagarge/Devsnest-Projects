var boardBox = document.querySelector('.board');


window.onload = () => {
    for(let i=0; i<20; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        boardBox.appendChild(row);

        for(let j=0; j<20; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }
}

setTimeout(() => {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('white');
        });
    }); 
}, 100);

