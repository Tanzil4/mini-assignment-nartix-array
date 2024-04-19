let matrix1 = [
    [4, 6, 7],
    [8, 3, 5],
    [0, 2, 8],
]
let matrix2 = [
    [5, 4, 6],
    [7, 2, 5],
    [0, 1, 9],
]


for (let t = 0; t < 3; t++) {
    
    for (let a = 0; a < 3; a++) {
       console.log(matrix1[t][a] ** matrix2[a][t]);
        
    }
}