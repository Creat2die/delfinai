function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

const array1 = [...Array(30)].map(_ => rand(5,25));
console.log(array1);

/* Naudodamiesi 1 uždavinio masyvu:
Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
Raskite didžiausią masyvo reikšmę ir jos indeksą;
*/
let sum2 = 0;
 array1.forEach(n => { n>10 ? sum2++ : null});
 console.log(sum2);
 /*Raskite didžiausią masyvo reikšmę ir jos indeksą;*/

// ALTERNATIVE    console.log(Math.max(...array1), array1.indexOf(Math.max(...array1)));
// ALTERNATIVE    maxInArray =array1.reduce((a,b)=> a> b ? a:b);
 let did2 = 0;
 let u2= 0;
 array1.forEach((n,i) => {
    if(n > did2){
        did2 = n;
        u2 = i;
    }
 })
 console.log(did2, u2);
/*
Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
*/

//ALTERNATIVE console.log(array1.filter((_,i)=> i% 2===0).reduce((a,b) => a+b));
 sum2 = 0;
 array1.forEach((n,i) => {if (i%2 === 0){sum2 += n}  });
 console.log(sum2);
 /* 
 Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
*/
 let array2=[];

 array1.forEach((n,i) => array2.push(n-i) )
 console.log(array2);

 /*Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
*/
// ALTERNATIVE array1.push(...([...Array(10)].map(_=>rand(5,25))));
for(let i =0; i<10; i++){
    array1.push(rand(5,25));
}
console.log(array1);
/*Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas 
iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
*/
// ALTERNATIVE const [array11, array12] = [array1.filter((_,i => i%2===0),array1.filter((_,i => i%2 !===0))))];
 let array11= [];
 let array12= [];
 array1.forEach((n,i) => {i%2===0 ? array12.push(n) : array11.push(n);});
 console.log(array11, array12);
 /* Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
*/
const array13 = array1.map((a,i) => {if(a>15 && i%2 === 0){return 0;}else{return a}});
console.log(array13);
/*Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;*/
let s=0;
array13.forEach((a,i)=> { while(a>10 &&  s<1){console.log(i);s++;}});

/*Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/

const ABC = 'ABCD';
let a7= 0;
let b7= 0;
let c7= 0;
let d7= 0;
const mas7 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);
console.log(mas7);
    for(let i7= 0; i7<mas7.length; i7++){
        if(mas7[i7] === 'A'){
            a7++;
        }else if(mas7[i7] === 'B'){
            b7++;
        }else if(mas7[i7] === 'C'){
            c7++;
        }else{
        d7++
    }
}
console.log(`A: ${a7}, B: ${b7}, C: ${c7},  D: ${d7} `);

/*Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes.
 Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
*/

//ALTERNATIVE const mas2 =[...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0,3)]);
//ALTERNATIVE  mas2.foEach(l => rez[l]++);

//ALTERNATIVE const arrayz5 = [...new Set (mas34)];
let unik=0;
 let mas34 = [];
const mas31 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);
const mas32 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);
const mas33 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);

for(let i=0; i<100; i++){
    mas34.push(mas31[i]+mas32[i]+mas33[i]);
}
console.log(mas34);
mas34.forEach((a,i)=>{if(mas34.indexOf(a)=== i){
    unik +=1;
}});
console.log(unik);

/*Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999.
 Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
 */
 let mas51=[]
 let mas52=[]
 let a =0;
 while (mas51.length<100){
    a= rand(100, 999);
    if(mas51.includes(a)){
        continue;
    }else{
        mas51.push(a);
    }
 };
 while (mas52.length<100){
    a= rand(100, 999);
    if(mas52.includes(a)){
        continue;
    }else{
        mas52.push(a);
    }
 };
 console.log(mas51);
 console.log(mas52);

 /*Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
*/
let mas61=[];
mas51.forEach(n => {if(mas52.includes(n)){
}else{
    mas61.push(n);
}});
console.log(mas61);

/*Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
*/
let mas71=[];
mas51.forEach(n => {if(mas52.includes(n)){
    mas71.push(n);
}});
console.log(mas71);

/*Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
*/
let mas81 = [...Array(1000)].map(_ => 0);

mas51.forEach((n,i) => {mas81[n] = mas52[i]});
console.log(mas81);
/*Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25.
 Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/

 let mas91=[];
for (let i=0; i<10; i++){
    if(mas91[i-1] > 0 && mas91[i-2] > 0){
        mas91[i]= mas91[i-2]+mas91[i-1];
    } else{
        mas91[i]=rand(5,25);
    }
}

console.log(mas91);