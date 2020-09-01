class RowReducer {
    // subtracts row 2 from row 1
    static addRow(matrix, row1, row2, multiplier){
        for(var i = 0; i < matrix[row1].length; i ++){
            matrix[row1][i] += matrix[row2][i] * multiplier
        }
    }

    static multiplyRow(matrix, row, multiplier){
        for(var i = 0; i < matrix[row].length; i ++){
            matrix[row][i] *= multiplier
        }
    }

    static swapRows(matrix, row1, row2){
        for(var i = 0; i < matrix[row1].length; i ++){
            var placeholder = matrix[row1][i]
            matrix[row1][i] = matrix[row2][i]
            matrix[row2][i] = placeholder
        }
    }

    static toREF(matrix, rows, cols){

        // tries to have non 0 pivots
        for(var col = 0; col < Math.min(rows, cols); col ++){
            if(matrix[col][col] == 0){
                for(var row = col + 1; row < rows; row ++){
                    if(matrix[row][col] != 0){
                        RowReducer.swapRows(matrix, col, row)
                    }
                }
            }
        }

        for(var col = 0; col < Math.min(rows, cols); col ++){
            if(matrix[col][col] != 1 && matrix[col][col] != 0){
                RowReducer.multiplyRow(matrix, col, 1 / matrix[col][col])
            }
            for(var row = col + 1; row < rows; row ++){
                if(matrix[row][col] != 0){
                    RowReducer.addRow(matrix, row, col, matrix[row][col] / matrix[col][col] * -1)
                }
            }
        }
    }

    static toRREF(matrix){
        var rows = matrix.length
        var cols = matrix[0].length
        RowReducer.toREF(matrix, rows, cols)
        for(var col = Math.min(rows, cols) - 1; col > -1; col --){
            for(var row = col - 1; row > -1; row --){
                if(matrix[col][col] != 0){
                    RowReducer.addRow(matrix, row, col, matrix[row][col] / matrix[col][col] * -1)
                }
            }
        }
        return matrix
    }
    
}

export default RowReducer