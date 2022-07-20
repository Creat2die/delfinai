// forEach; map; sort; filter;

[1, 5, 77].forEach(a => console.log(a));

console.log(`----------`);

[1, 5, 77].forEach(a => {
    if(a > 4){
        console.log(a);
    }
});


console.log(`----------`);
[1, 5, 77].forEach((a, i)=> console.log(a, i));


console.log(`----------`);
[1, 5, 77].forEach((a, i, t)=> console.log(t[2]));

console.log(`----------`);
[1, 5, 77].forEach((a, i, t)=> console.log(t[t.length -1 -i]));

console.log(`-----map-----`);
const fe = [1, 5, 77].map(a => console.log(a));
//const map = [1, 5, 77].map((a,i) => a * i);
const map = [1, 5, 77].map((a,i) => {
    return a * i;
});

console.log(fe);
console.log(map);

console.log(`-----filter-----`);
const fi = [1, 0, 5, 77].filter(a => a>4);
console.log(fi);

console.log(`-----sort-----`);
const namas = [1, 10, 0, 5, 77];
console.log(namas);
namas.sort((a,b)=> a -b);

console.log(namas);