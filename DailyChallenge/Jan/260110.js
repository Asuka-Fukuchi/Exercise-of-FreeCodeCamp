// Tic-Tac-Toe
// Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

// Each element in the given matrix is either an "X" or "O".
// A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

// Return:

// "X wins" if player X has three in a row.
// "O wins" if player O has three in a row.
// "Draw" if no player has three in a row.

function ticTacToe(board) {
    const patterns = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (let i = 0; i < patterns.length; i++) {
        const [a, b, c] = patterns[i];
        // const a = patterns[i][0];
        // const b = patterns[i][1];
        // const c = patterns[i][2];

        const v1 = board[a[0]][a[1]];
        const v2 = board[b[0]][b[1]];
        const v3 = board[c[0]][c[1]];
        if (v1 === v2 && v2 === v3) {
            return `${v1} wins`;
        }
    }
    return "Draw";
}
console.log(ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]));
console.log(ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]));
console.log(ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]));
console.log(ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]));
console.log(ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]));
console.log(ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]));