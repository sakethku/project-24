/*const plants = [2,3,4];
const some=plants.shift();
console.log(plants);
//console.log(some);


console.log(plants.pop());
// expected output: "tomato"

//console.log(plants);
const rows=8;
const colum=2;
let grid = new Array(rows);//10 rows here
let num=0;
for(let i=0;i<rows;i++){
    //for 
    grid[i] = [];
    for(let j=1;j<=colum;j++)
    {
       grid[i][j-1] = j+num;
    }
    num += colum;
}
console.table(grid);*/
function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 4;
const y = 4;

const result = twoDimensionArray(x, y);
console.log(result);
