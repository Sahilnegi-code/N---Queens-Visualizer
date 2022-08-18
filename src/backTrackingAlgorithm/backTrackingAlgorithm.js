function createBoard(size){
    const board = [ ];
    for(let i = 0 ; i < size ; i++)
    {
        board.push(getRowsOfZeros(size));
    }
    return board;
}
export function backTrackingAlgorithm(size  , animations=[])  {
   
 
    const board = createBoard(size);
   
    
    solveNQueenUtil(board, 0 , animations);
 
    return board;
    
}
function solveNQueenUtil(board =[] , col , animation = [])
{
    let N = board.length;
    if(col>= N) return true;

    for(let i = 0 ; i < N ;i++)
    {
        if(isSafe(board  , i , col ))
        {
             board[i][col] = true;
             animation.push([i , col , true]);
             if( solveNQueenUtil(board , col + 1 , animation  ) ) return true;
             board[i][col] = false;
             animation.push([ i , col,  false]);
        }
    }
    return false;
}

function isSafe(board = [] , row  , col)
    {
        const N = board.length;
        // checking for row in same column  .
        for( let i = 0 ; i < col; i++   )
        {
            if(  board[row][i] === true ) {
                return false;
            }
        }
    
        // checking for diagonals at the left side 
        for(let i = row , j = col ; i >= 0 && j >= 0 ; j-- , i--){
            if(  board[i][j] === true ) return false;
        }
    
        // checking for diagonals at the right side
        for(let i = row , j = col ; i < N && j >= 0 ; i++ , j--){
            if(  board[i][j] === true ) return false;
        }
    
        return true;
    
    }

export function getRowsOfZeros(size){
    const row = [];
    for(let i = 0 ; i < size ; i++)
    {
        row.push(false);
    }
    return row;
}