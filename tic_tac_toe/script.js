let step = '';
let winner = '';
let counter = 0;

const cell = document.querySelectorAll('.cell');

const whoGO = document.getElementById('whoGo');

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const who = () => {
    if (step == 'cross') {
        step = 'circle';
        whoGO.innerText = 'Nuliukai';
    } else {
        step = 'cross';
        whoGO.innerText = 'Kryžiukai';
    }
}
who();

cell.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('circle') && !item.classList.contains('cross')) {
            item.classList.add(step);

            if (step == 'cross') {
                item.innerText = 'X';
            }
            if (step == 'circle') {
                item.innerText = 'O';
            }

            who();
        }
    })
})

const crossWin = () => {
    
}