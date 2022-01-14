<script>
        import SudokuCell from "./SudokuCell.svelte";
        let initBoard = 
        [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

        $: sudokuBoard = initBoard

        const delay = ms => new Promise(res => setTimeout(res, ms))

        let delayTime = "";
        $: disabled = delayTime === "" ? true : false
        $: delayMs = Math.floor(parseInt(delayTime))

        console.log(delayMs)
        
        const solveBoard = async () => {
                await solve(initBoard, 0, 0)
        }

        const validPlacement = async (board, row, col) => {
                let num = board[row][col]

                let box = Math.floor(row/3)*3 + Math.floor(col/3)

                for (let x = 0; x < 9; x++) {
                        if (board[row][x] === num && x !== col) return false
                }
                for (let y = 0; y < 9; y++) {
                        if (board[y][col] === num && y !== row) return false
                }
                for (let y = 0; y < 9; y++) {
                        for (let x = 0; x < 9; x++) {
                                if (Math.floor(y/3)*3 + Math.floor(x/3) === box) {
                                        if (board[y][x] === num && y !== row && x !== col) return false
                                }
                        }
                }

                initBoard = [...initBoard]

                return true
        }
        
        const solve = async (board, row, col) => {
                if (delayMs > 0) await delay(delayMs)
                if (col == board[row].length) {
                        col = 0
                        row += 1
                }
                if (row == board.length) {
                        return true
                }

                if (board[row][col] === '.') {
                        for (let i = 0; i < 10; i++) {
                                board[row][col] = i.toString()

                                if (await validPlacement(board, row, col)) {
                                        if(await solve(board, row, col + 1)) return true
                                }

                                board[row][col] = '.'
                        }
                } else {
                        if (await solve(board, row, col + 1)) return true
                }
        }

        const handleInput = () => {
                if (delayTime) {
                        if (parseInt(delayTime) >= 100) delayTime = 100
                        if (parseInt(delayTime) <=0) delayTime = 0
                }
        }
</script>
<h2 class="my-4 text-white text-xl sm:text-2xl">SELF SOLVING SUDOKU!</h2>

<div class="sm:px-40 px-1 justify-center grid grid-cols-9 ">
        {#each sudokuBoard as col, y}
                {#each col as row, x}
                <SudokuCell value={row} />
                {/each}
        {/each}
</div>
<div  class="flex flex-row justify-center items-center text-center">        
        <button {disabled} on:click={solveBoard} type='button' class="transform transition-transform hover:scale-110 bg-white text-center text-black disabled:bg-gray-500 p-4 text-4xl rounded-3xl my-5">SOLVE!</button>
        <form class="flex flex-row mx-4 justify-center">
                <div >
                        <input class="rounded-lg p-2" placeholder="Solving speed (0,100) ms" type="text" bind:value={delayTime} on:input={handleInput}>
                </div>
        </form>
</div>