function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
*/

 const pinigine = [...Array(rand(10,30))].map(_ => rand(0,10));
 console.log(pinigine);

 /*Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
*/
let sum2=0;
pinigine.forEach(a => sum2 += a);
console.log(sum2);
/*Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
*/
let sum3=0;
pinigine.forEach(a => {if (a>2){sum3+=a}} );
console.log(sum3);

/*Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
*/
pinigine.forEach((a,i) => {if (a <=2){ pinigine[i] = 0;} })
console.log(pinigine);

/*Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
*/

let sum4=0;
const max4 =Math.max(...pinigine);
console.log(max4);
pinigine.forEach(a => {if (a===max4){
    sum4++;
}});
console.log(`didziausias yra ${max4} ju yra ${sum4}`);

/*Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
*/

pinigine.forEach((a,i) => {if (a <=2){ pinigine[i] = i;} })
console.log(pinigine);

/*Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
*/
while(pinigine.length<30    ){
    pinigine.push(rand(0,10));
}
console.log(pinigine);

/*Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
*/

let mas81 = [];
let mas82 = [];
pinigine.forEach(a => a>2 ? mas81.push(a) :  mas82.push(a));
console.log(mas81);
console.log(mas82);

/*Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų,
 kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
*/
let mas91= [];
mas91[0]= mas81;
mas91[1]= mas82;

console.log(mas91);

/*Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: 
['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
*/
mas91[2] = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log(mas91);

/*Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
*/
mas91.forEach(n => {n.sort()})
console.log(mas91);

/*Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes
     'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
*/
const korteles= ['MasterCard', 'Visa']

while (mas91[2].length<20){
    mas91[2].push(korteles[rand(0,1)]);
}
console.log(mas91);

/*Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
*/
let  master= 0;
let visa=0;
mas91[2].forEach(a => {if(a === 'MasterCard'){
    master++;
} else if(a === 'Visa'){
    visa++;
}
});
if(master> visa){
    console.log(`MasterCard daugiau`);
} else if(master< visa){
    console.log(`Visa daugiau`);
} else {
    console.log(`lygiai`);
}


/*Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
 kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
*/
console.log(mas91);
mas91.push([]);
for(let i=0; i<10; i++){
    mas91[3].push(rand(1000000000,9999999999));
}
console.log(mas91);

/*Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
*/

mas91[3].sort();
console.log(mas91[3]);

/*Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
*/
let sum16=0;
let a= 0;
let b=0;
mas91[0].forEach(n => sum16 += n);
console.log(sum16);
while(sum16< 500){
    a=rand(3,10);
    sum16+=a;
    mas91[0].push(a);

};

while(sum16 !== 500){
    sum16-=mas91[0][mas91[0].length-1];
    mas91[0].pop();
    sum16-=mas91[0][mas91[0].length-1];
    mas91[0].pop();
    b=rand(3,10);
    sum16+=b;
    mas91[0].push(b);
    b=rand(3,10);
    sum16+=b;
    mas91[0].push(b);
};
console.log(sum16);

/*Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
*/
let laimejimas = 0;
mas91[3].forEach(n => n%777 === 0 ? laimejimas++ : laimejimas +=0)
console.log(laimejimas);

/* Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
 ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
*/
mas91.push([]);
mas91[4].push('šuo', 'katė', 'automobilis', 'namas', 'kiemas')
mas91[4].sort((a, b) => a.length - b.length);
console.log(mas91[4]);