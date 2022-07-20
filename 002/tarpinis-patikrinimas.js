const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė',
 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];


 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite su console.log();
*/

const cats = [...Array(10)].map(_ => (rand(2,12)));
console.log(cats);
const owners = [...Array(10)].map(_ => girls[rand(0,8)]);
console.log(owners);

/*Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą).
 Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log();
*/
let sum =0;
cats.forEach(a => sum += a);
console.log(sum);
let sumSum= 0;
cats.forEach(a => {if(a % 3 === 0) {sumSum += a}});
console.log(sumSum); 

/*Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!)
 pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;
*/
owners.unshift('Nausėda');
console.log([...owners]);

/*Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats),
 naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo,
  antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'),
   o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();
*/

let num1=1;
let num0 = 0;
const catOwners = [...Array(10)].map(_ =>  `${owners[num1++]} has ${cats[num0++]} cats`);

    console.log(catOwners);


    /* Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log()
    */
    let double = '';
    owners.sort().forEach((n,i) => {
        if(owners[i] === owners[i+1]){
            double = owners[i];
        }

    } );
    console.log(double);

