// febonacci series

let a , b = 0 , c = 1;

let num = 10;

let str = ' ';

for(let i = 1; i <= 10; i++){
    a = b; 
    b = a + c;
    c = a;
    str += a + ' ';
}
console.log("Febonacci Series:",str);

