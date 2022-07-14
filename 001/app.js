

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  console.log(`labas`);
    let array=[];
    for(i=0; i <10; i++){
       array.push(rand(7, 77));
       console.log(array[i]);
    }
   


    const cats = ['Murka', 'Pilkis', 'Rainius'];

    console.log(cats[rand(0,2)]);

    array.forEach(n => console.log(n));