function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 užduotis
console.log('----namu darbai------');

console.log(`1 užduotis:`);
const a = rand(0,4);
const b = rand(0, 4);
 if(a>b){
    console.log(a/b);
 }else{
    console.log(b/a);
 }

 console.log(`2 užduotis:`);
  let arr2=[];
 arr2.push(a2 = rand(0,25));
 arr2.push(b2 = rand(0,25));
 arr2.push(c2 = rand(0,25));
 arr2.sort((a, b) => a - b);

console.log(`a = ${a2}, b= ${b2} c=${c2} `);
console.log(`vidurinis ${arr2[1]}`);


 console.log(`3 užduotis:`);
 a3 = rand(1,10);
 b3 = rand(1,10);
 c3 = rand(1,10);
 console.log(`a = ${a3}, b= ${b3} c=${c3} `);
 if(a3+b3>c3 && c3+b3>a3 && a3+c3>b3 ){
    console.log(`galima`);
 } else{
    console.log(`negalima`);
 }

 console.log(`4 užduotis:`);
 let arry = [];
 let nulis = 0;
 let vienas = 0;
 let du = 0;
 arry.push(a4 = rand(0,2));
 arry.push(b4 = rand(0,2));
 arry.push(c4 = rand(0,2));
 arry.push(d4 = rand(0,2));
console.log(arry);
for(num of arry){
    if(num === 0){
         nulis+=1;
    } else if (num === 1){
        vienas+= 1;
    } else{
        du += 1;
    }
}
console.log(`0 = ${nulis}, 1 = ${vienas} 2=${du} `);

console.log(`5 užduotis:`);
 let arry5 = [];

 arry5.push(a5 = rand(-10,10));
 arry5.push(b5 = rand(-10,10));
 arry5.push(c5 = rand(-10,10));
console.log(arry5);
for(num of arry5){
    if(num < 0 ){
        console.log(`+${num}+`);
    } else if (num > 0){
        console.log(`-${num}-`);
    }else{
        console.log(`*${num}*`);
    }
}
console.log(`6 užduotis:`);
 let a6 = rand(5,3000)
 if(a6<1000){
    console.log(`nupirkta ${a6} zvakiu + kaina :${a6}`);
 }else if(a6>2000){
    console.log(`nupirkta ${a6} zvakiu + kaina :${a6*0.94}`);
 } else{
    console.log(`nupirkta ${a6} zvakiu + kaina :${a6*0.97}`);
 }

 console.log(`7 užduotis:`);
  let arry7 = [];
  let sum =0;
  let s =0;
 arry7.push(a7 = rand(0,100));
 arry7.push(b7 = rand(0,100));
 arry7.push(c7 = rand(0,100));
 console.log((a7+b7+c7)/3);
for(n of arry7){
    if (n > 10 && n < 90){
        sum += n;
        s +=1;
    }
}
console.log(sum/s);