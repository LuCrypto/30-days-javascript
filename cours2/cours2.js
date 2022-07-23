// Level 1

let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);

let upperChallenge = challenge.toUpperCase();
console.log(upperChallenge);

let lowerChallenge = challenge.toLowerCase();
console.log(lowerChallenge);

console.log(challenge.substring(0, 2));

console.log(challenge.slice(3, 50));

console.log(challenge.includes('JavaScript'));

let tableauArrayUnElement = challenge.split();
let tableauArray = challenge.split(' ');
console.log(tableauArrayUnElement);
console.log(tableauArray);

let gafa = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
console.log(gafa);

let challengePython = challenge.replace('JavaScript', 'Python');
console.log(challengePython);

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));


let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

let challenge2 = ' 30 Days Of JavaScript ';
console.log(challenge2.trim());

console.log(challenge.repeat(3));

// Level 2

let phrase = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log("phrase: " + phrase);

let phrase2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log("phrase2: " + phrase2);

console.log(typeof 10 == typeof 10);
console.log(Math.ceil(parseFloat('9.8')));

let phrase3 = "I hope this course is not full of jargon"
console.log(phrase3.includes('jargon'));

console.log(Math.floor(Math.random() * 50) + 50);

let phrase4 = "JavaScript";
let nombreRandom = Math.floor(Math.random() * phrase4.length);
console.log(phrase4.charAt(nombreRandom));

let phrase5 = "1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125";
console.log(phrase5);

let phrase6 = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase6.substring(0, phrase6.indexOf('because because because')));

let phrase7 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log("Nombre de love : ", phrase7.match(/love/gi).length);

let phrase8 = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase8.match(/because/gi).length);

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log("sentence2 : ", sentence2);

// %, @, &, #, $, !, and ;
let tableauSpecialChar = ['%', '@', '&', '#', '$', '!', ';'];
console.log("tableauSpecialChar : ", tableauSpecialChar);

let sentence2Modifiable = sentence2;
for (let i = 0; i < tableauSpecialChar.length; i++) {
    sentence2Modifiable = sentence2Modifiable.replaceAll(tableauSpecialChar[i], '');
}

console.log("sentence2Modifiable : ", sentence2Modifiable);

let phrase9 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let number5000 = phrase9.substring(phrase9.indexOf('5000'), phrase9.indexOf('5000') + 5);
let number10000 = phrase9.substring(phrase9.indexOf('10000'), phrase9.indexOf('10000') + 6);
let number15000 = phrase9.substring(phrase9.indexOf('15000'), phrase9.indexOf('15000') + 6);
console.log("number5000 : ", number5000);
console.log("number5000 : ", number10000);
console.log("number5000 : ", number15000);

number5000 = Number(number5000);
number10000 = Number(number10000);
number15000 = Number(number15000);
console.log("number5000 : ", number5000);
console.log("number10000 : ", number10000);
console.log("number15000 : ", number15000);

let retourAnnuel = (number5000 + number15000) * 12 + number10000;
console.log("retourAnnuel : ", retourAnnuel);