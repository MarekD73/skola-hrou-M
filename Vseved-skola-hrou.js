const prompt = require('prompt-sync')();

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let udalosti = {};

function menu() {
    console.log("\n1. Otazky z Matematiky pro 1-2ročnik");
    console.log("2. Otazky z Matematiky pro 3-4ročnik");
    console.log("3. Otazky ze Zeměpisu Hlavní města v Evropě");
    console.log("4. Otázky ze Zeměpisu Hlavní města ze Světa");
    console.log("5. Otazky ze Zeměpisu České řeky");
    console.log("6. Ukončit program");

    rl.question("Vyber možnost: ", (odpoved) => {
        if (odpoved === "1") {
            console.log("\n=== Matematika pro 1-2.ročník ===");

            // console.log("1.   3+3=")
            // console.log("2.   5+3=")
            // console.log("3.   4+3=")
            // console.log("4.   1+1=")
            // console.log("5.   3+2=")
            // console.log("6.   5-3=")
            // console.log("7.   8-5=")
            // console.log("8.   7-3=")
            // console.log("9.   9-8=")
            // console.log("10.  5-1=")

            console.log("Začínáme:")

            console.log("1/10  3+3=");
            let vzorec1 = (3+3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec1 === 6;{
                    // console.log(`${vzorec1} Je správně`);

                }
            }
            let soucet1 = function (a,b){
                return a+b;
            }
            let value1 = soucet1(3,3)
            console.log(`Spravne je: ${value1} `)


            console.log("2/10  5+3=");
            let vzorec2 = (5+3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec2 === 8;{
                    // console.log(`${vzorec2} Je správně`);

                }
            }
            let soucet2 = function (a,b){
                return a+b;
            }
            let value2 = soucet2(5,3)
            console.log(`Spravne je: ${value2} `)

            console.log("3/10  4+3=");
            let vzorec3 = (4+3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec3 === 7;{
                    // console.log(`${vzorec3} Je správně`);

                }
            }
            let soucet3 = function (a,b){
                return a+b;
            }
            let value3 = soucet3(4,3)
            console.log(`Spravne je: ${value3} `)

            console.log("4/10  1+1=");
            let vzorec4 = (1+1); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec4 === 2;{
                    // console.log(`${vzorec4} Je správně`);

                }
            }
            let soucet4 = function (a,b){
                return a+b;
            }
            let value4 = soucet4(1,1)
            console.log(`Spravne je: ${value4} `)


            console.log("5/10  3+2=");
            let vzorec5 = (3+2); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec5 === 5;{
                    // console.log(`${vzorec5} Je správně`);

                }
            }
            let soucet5 = function (a,b){
                return a+b;
            }
            let value5 = soucet5(3,2)
            console.log(`Spravne je: ${value5} `)


            console.log("6/10  5-3=");
            let vzorec6 = (5-3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec6 === 2;{
                    // console.log(`${vzorec6} Je správně`);

                }
            }
            let soucet6 = function (a,b){
                return a-b;
            }
            let value6 = soucet6(5,3)
            console.log(`Spravne je: ${value6} `)


            console.log("7/10  8-5=");
            let vzorec7 = (8-5); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec7 === 3;{
                    // console.log(`${vzorec7} Je správně`);

                }
            }
            let soucet7 = function (a,b){
                return a-b;
            }
            let value7 = soucet7(8,5)
            console.log(`Spravne je: ${value7} `)


            console.log("8/10  7-3=");
            let vzorec8 = (7-3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec8 === 4;{
                    // console.log(`${vzorec8} Je správně`);

                }
            }
            let soucet8 = function (a,b){
                return a-b;
            }
            let value8 = soucet8(7,3)
            console.log(`Spravne je: ${value8} `)


            console.log("9/10  9-8=");
            let vzorec9 = (9-8); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec9 === 1;{
                    // console.log(`${vzorec9} Je správně`);

                }
            }
            let soucet9 = function (a,b){
                return a-b;
            }
            let value9 = soucet9(9,8)
            console.log(`Spravne je: ${value9} `)


            console.log("10/10  5-1=");
            let vzorec10 = (5-1); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec10 === 4;{
                    // console.log(`${vzorec10} Je správně`);

                }
            }
            let soucet10 = function (a,b){
                return a-b;
            }
            let value10 = soucet10(5,1)
            console.log(`Spravne je: ${value10} `)

            menu();
        }


        if (odpoved === "2") {
            console.log("\n=== Matematika pro 3-4.ročník ===");
            // console.log("1.   30+20=")
            // console.log("2.   37+23=")
            // console.log("3.   77-21=")
            // console.log("4.   80-20=")
            // console.log("5.   6*4=")
            // console.log("6.   10*3=")
            // console.log("7.   7*6=")
            // console.log("8.   49/7=")
            // console.log("9.   63*2=")
            // console.log("10.  63*4=")

            console.log("Začínáme:")
// for (let i = 1; i <= 10; i++) {
//  if (udalosti[i]) {
//   console.log(`${i}. ${udalosti[i]} ⭐`);
//    } else {
//   console.log(`${i}.`);


            console.log("1/10  30+20=");
            let vzorec1 = (30 + 20);
            {
                let priklady = prompt("Zadej výpočet ")

                let resort = vzorec1 === 60;
                {
                    // console.log(`${vzorec1} Je správně`);

                }
            }
            let soucet1 = function (a, b) {
                return a + b;
            }
            let value1 = soucet1(30, 20)
            console.log(`Spravne je: ${value1} `);

            console.log("2/10  37+23=");
            let vzorec2 = (37+23); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec2 === 60;{
                    // console.log(`${vzorec2} Je správně`);

                }
            }
            let soucet2 = function (a,b){
                return a+b;
            }
            let value2 = soucet2(37,23)
            console.log(`Spravne je: ${value2} `)

            console.log("3/10  77-21=");
            let vzorec3 = (77-21); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec3 === 56;{
                    // console.log(`${vzorec3} Je správně`);

                }
            }
            let soucet3 = function (a,b){
                return a-b;
            }
            let value3 = soucet3(77,21)
            console.log(`Spravne je: ${value3} `)

            console.log("4/10  80-20=");
            let vzorec4 = (80-20); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec4 === 60;{
                    // console.log(`${vzorec4} Je správně`);

                }
            }
            let soucet4 = function (a,b){
                return a-b;
            }
            let value4 = soucet4(80,20)
            console.log(`Spravne je: ${value4} `)


            console.log("5/10  6*4=");
            let vzorec5 = (6*4); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec5 === 24;{
                    // console.log(`${vzorec5} Je správně`);

                }
            }
            let soucet5 = function (a,b){
                return a*b;
            }
            let value5 = soucet5(6,4)
            console.log(`Spravne je: ${value5} `)


            console.log("6/10  10*3=");
            let vzorec6 = (10*3); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec6 === 30;{
                    // console.log(`${vzorec6} Je správně`);

                }
            }
            let soucet6 = function (a,b){
                return a*b;
            }
            let value6 = soucet6(10,3)
            console.log(`Spravne je: ${value6} `)


            console.log("7/10  7*6=");
            let vzorec7 = (7*6); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec7 === 42;{
                    // console.log(`${vzorec7} Je správně`);

                }
            }
            let soucet7 = function (a,b){
                return a*b;
            }
            let value7 = soucet7(7,6)
            console.log(`Spravne je: ${value7} `)


            console.log("8/10  49/7=");
            let vzorec8 = (49/7); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec8 === 7;{
                    // console.log(`${vzorec8} Je správně`);

                }
            }
            let soucet8 = function (a,b){
                return a/b;
            }
            let value8 = soucet8(49,7)
            console.log(`Spravne je: ${value8} `)


            console.log("9/10  63*2=");
            let vzorec9 = (63*2); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec9 === 126;{
                    // console.log(`${vzorec9} Je správně`);

                }
            }
            let soucet9 = function (a,b){
                return a*b;
            }
            let value9 = soucet9(63,2)
            console.log(`Spravne je: ${value9} `)


            console.log("10/10  63*4=");
            let vzorec10 = (63*4); {
                let priklady = prompt("Zadej výpočet ")

                let resort= vzorec10 === 252;{
                    // console.log(`${vzorec10} Je správně`);

                }
            }
            let soucet10 = function (a,b){
                return a*b;
            }
            let value10 = soucet10(63,4)
            console.log(`Spravne je: ${value10} `)


            menu();
            }
        if (odpoved === "3") {
            console.log("\n=== Otazky ze Zeměpisu Hlavníh měst v Evropě ===");
            console.log("1.otázka:  Hlavní město Německa je? ")
            console.log("napiš: a,nebo b,c,d")
            let city2 = ["a. Berlin", "b. Hamburk", "c. Mnichav", "d. Franfurt"];
// console.log(city[0]);
// console.log(city[1]);
// console.log(city[2]);
// console.log(city[3]);
            for (let i = 0; i < city2.length; i++) {
                console.log(city2[i]);
            }


// for (let name of city) {
//     console.log(city);
// }
            // console.log("a. Berlín");
            // console.log("b. Hamburk");
            // console.log("c. Mnichov");
            // console.log("d. Frankfurt");
            let city1 = prompt("Jaké je hlavní město Německa?  ");{


                let city = ["Berlin"];{

                    // city.pop();
                    console.log(city);

                }
                if (city1)
                    if (city1.includes("Berlin") || (city1.includes("berlin")) || city1.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//2. Otazka


            console.log("2.otázka:  Hlavní město Španělska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city3 = ["a. Barcelona", "b. Madrid", "c. Valencia", "d. Sellia"];

            for (let i = 0; i < city3.length; i++) {
                console.log(city3[i]);
            }
            let city4 = prompt("Jaké je hlavní město Španělska?  ");{

                let citya = ["Madrid"];{
                    console.log(citya);
                }
                if (city4)
                    if (city4.includes("Madrid") || city4.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//3. Otazka


            console.log("3.otázka:  Hlavní město Francie je? ")
            console.log("napiš: a,nebo b,c,d")
            let city5 = ["a. Marseille", "b. Lyon", "c. Paříš", "d. Nice"];

            for (let i = 0; i < city5.length; i++) {
                console.log(city5[i]);
            }
            let city6 = prompt("Jaké je hlavní město Francie?  ");{

                let cityb = ["Paříš"];{
                    console.log(cityb);
                }
                if (city6)
                    if (city6.includes("Paris") || city6.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//4. Otazka

            console.log("3.otázka:  Hlavní město Italie je? ")
            console.log("napiš: a,nebo b,c,d")
            let city7 = ["a. Řím", "b. Milan", "c. Benatky", "d. Verona"];

            for (let i = 0; i < city7.length; i++) {
                console.log(city7[i]);
            }
            let city8 = prompt("Jaké je hlavní město Italie?  ");{

                let cityc = ["Řím"];{
                    console.log(cityc);
                }
                if (city8)
                    if (city8.includes("Rim") || city8.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
// 5. Otazka

            console.log("5.otázka:  Hlavní město Rakouska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city9 = ["a. Salzburg", "b. Vídeň", "c. Innstruck", "d. Lince"];

            for (let i = 0; i < city9.length; i++) {
                console.log(city9[i]);
            }
            let city10 = prompt("Jaké je hlavní město Rakouska?  ");{

                let cityd = ["Vídeň"];{
                    console.log(cityd);
                }
                if (city10)
                    if (city10.includes("Viden") || city10.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//6. Otazka

            console.log("6.otázka:  Hlavní město Polska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city9a = ["a. Wroclav", "b. Gdaňsko", "c. Varšava", "d. Krakov"];

            for (let i = 0; i < city9a.length; i++) {
                console.log(city9a[i]);
            }
            let city10a = prompt("Jaké je hlavní město Polska?  ");{

                let cityd = ["Varšava"];{
                    console.log(cityd);
                }
                if (city10a)
                    if (city10a.includes("Varsava") || city10a.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//7. Otazka

            console.log("7.otázka:  Hlavní město České republiky je? ")
            console.log("napiš: a,nebo b,c,d")
            let city11 = ["a. Brno", "b. Ostrava", "c. Plzeň", "d. Praha"];

            for (let i = 0; i < city11.length; i++) {
                console.log(city11[i]);
            }
            let city12 = prompt("Jaké je hlavní město České republiky?  ");{

                let citye = ["Praha"];{
                    console.log(citye);
                }
                if (city12)
                    if (city12.includes("Praha") || city12.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//8. Otazka

            console.log("8.otázka:  Hlavní město Řecka je? ")
            console.log("napiš: a,nebo b,c,d")
            let city13 = ["a. Ateny", "b. Soluň", "c. Larisa", "d. Sparta"];

            for (let i = 0; i < city13.length; i++) {
                console.log(city13[i]);
            }
            let city14 = prompt("Jaké je hlavní město Řecka?  ");{

                let cityf = ["Ateny"];{
                    console.log(cityf);
                }
                if (city14)
                    if (city14.includes("Ateny") || city14.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
 //9. Otazka

            console.log("9.otázka:  Hlavní město Slovenska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city15 = ["a. Košice", "b. Martin", "c. Bratislava", "d. Žilina"];

            for (let i = 0; i < city15.length; i++) {
                console.log(city15[i]);
            }
            let city16 = prompt("Jaké je hlavní město Slovenska?  ");{

                let cityg = ["Bratislava"];{
                    console.log(cityg);
                }
                if (city16)
                    if (city16.includes("Bratislava") || city16.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//10. Otazka

            console.log("10.otázka:  Hlavní město Švédska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city17 = ["a. Oslo", "b. Kodaň", "c. Helsinki", "d. Stockholm"];

            for (let i = 0; i < city17.length; i++) {
                console.log(city17[i]);
            }
            let city18 = prompt("Jaké je hlavní město Švédska?  ");{

                let cityh = ["Stockholm"];{
                    console.log(cityh);
                }
                if (city18)
                    if (city18.includes("Stockholm") || city18.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
            menu();
        }
        if (odpoved === "4") {
            console.log("\n=== Otázky ze Zeměpisu Hlavní města ze Světa ===");
            console.log("1.otázka:  Hlavní město USA je? ")
            console.log("napiš: a,nebo b,c,d")
            let city2 = ["a. Washington", "b. New York", "c. Las Vegas", "d. Boston"];

            for (let i = 0; i < city2.length; i++) {
                console.log(city2[i]);
            }

            let city1 = prompt("Hlavní město USA je?  ");{


                let city = ["Washington"];{

                    console.log(city);

                }
                if (city1)
                    if (city1.includes("Washington") || (city1.includes("washington")) || city1.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//2. Otazka


            console.log("2.otázka:  Hlavní město Kanady je? ")
            console.log("napiš: a,nebo b,c,d")
            let city3 = ["a. Toronto", "b. Ottawa", "c. Montreal", "d. Calgery"];

            for (let i = 0; i < city3.length; i++) {
                console.log(city3[i]);
            }
            let city4 = prompt("Jaké je hlavní město Kanady?  ");{

                let citya = ["Ottawa"];{
                    console.log(citya);
                }
                if (city4)
                    if (city4.includes("Ottawa") || city4.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//3. Otazka


            console.log("3.otázka:  Hlavní město Mexika je? ")
            console.log("napiš: a,nebo b,c,d")
            let city5 = ["a. Hermosillo", "b. Chihuahua", "c. Terreon", "d. Mexiko"];

            for (let i = 0; i < city5.length; i++) {
                console.log(city5[i]);
            }
            let city6 = prompt("Jaké je hlavní město Mexika?  ");{

                let cityb = ["Mexiko"];{
                    console.log(cityb);
                }
                if (city6)
                    if (city6.includes("Mexiko") || city6.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//4. Otazka

            console.log("4.otázka:  Hlavní město Kolumbie je? ")
            console.log("napiš: a,nebo b,c,d")
            let city7 = ["a. Bogota", "b. Caracas", "c. Quito", "d. Sucre"];

            for (let i = 0; i < city7.length; i++) {
                console.log(city7[i]);
            }
            let city8 = prompt("Jaké je hlavní město Kolumbie?  ");{

                let cityc = ["Bogota"];{
                    console.log(cityc);
                }
                if (city8)
                    if (city8.includes("Bogota") || city8.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
// 5. Otazka

            console.log("5.otázka:  Hlavní město Egipta je? ")
            console.log("napiš: a,nebo b,c,d")
            let city9 = ["a. Tripolis", "b. Kahira", "c. Rabat", "d. Jeruzalém"];

            for (let i = 0; i < city9.length; i++) {
                console.log(city9[i]);
            }
            let city10 = prompt("Jaké je hlavní město Egipta?  ");{

                let cityd = ["Kahira"];{
                    console.log(cityd);
                }
                if (city10)
                    if (city10.includes("Kahira") || city10.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//6. Otazka

            console.log("6.otázka:  Hlavní město Iráku je? ")
            console.log("napiš: a,nebo b,c,d")
            let city9a = ["a. Isfahan", "b. Damašek", "c. Bagdád", "d. Amman"];

            for (let i = 0; i < city9a.length; i++) {
                console.log(city9a[i]);
            }
            let city10a = prompt("Jaké je hlavní město Iraku?  ");{

                let cityd = ["Bagdád"];{
                    console.log(cityd);
                }
                if (city10a)
                    if (city10a.includes("Bagdat") || city10a.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//7. Otazka

            console.log("7.otázka:  Hlavní město Indie je? ")
            console.log("napiš: a,nebo b,c,d")
            let city11 = ["a. Islamabad", "b. Kathmandu", "c. Dhaka", "d. New Dillí"];

            for (let i = 0; i < city11.length; i++) {
                console.log(city11[i]);
            }
            let city12 = prompt("Jaké je hlavní město Indie?  ");{

                let citye = ["New Dillí"];{
                    console.log(citye);
                }
                if (city12)
                    if (city12.includes("New Dilli") || city12.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//8. Otazka

            console.log("8.otázka:  Hlavní město Nového Zelandu je? ")
            console.log("napiš: a,nebo b,c,d")
            let city13 = ["a. Wellington", "b. Hamilton", "c. Napier", "d. Tauranga"];

            for (let i = 0; i < city13.length; i++) {
                console.log(city13[i]);
            }
            let city14 = prompt("Jaké je hlavní město Nového Zelandu?  ");{

                let cityf = ["Wellington"];{
                    console.log(cityf);
                }
                if (city14)
                    if (city14.includes("Wellington") || city14.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
// //9. Otazka
//
            console.log("9.otázka:  Hlavní město Australie je? ")
            console.log("napiš: a,nebo b,c,d")
            let city15 = ["a. Sydney", "b. Melbourne", "c. Canberra", "d. Adelaide"];

            for (let i = 0; i < city15.length; i++) {
                console.log(city15[i]);
            }
            let city16 = prompt("Jaké je hlavní město Australie?  ");{

                let cityg = ["Canberra"];{
                    console.log(cityg);
                }
                if (city16)
                    if (city16.includes("Canberra") || city16.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//10. Otazka

            console.log("10.otázka:  Hlavní město Japonska je? ")
            console.log("napiš: a,nebo b,c,d")
            let city17 = ["a. Nagano", "b. Fukušima", "c. Hirošima", "d. Tokio"];

            for (let i = 0; i < city17.length; i++) {
                console.log(city17[i]);
            }
            let city18 = prompt("Jaké je hlavní město Japonska?  ");{

                let cityh = ["Tokio"];{
                    console.log(cityh);
                }
                if (city18)
                    if (city18.includes("Tokio") || city18.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
            menu();
        }

        if (odpoved === "5") {
            console.log("\n=== Otazky ze Zeměpisu České řeky ===");
            console.log("1.otázka:  Která řeka protéká Prahou ? ")
            console.log("napiš: a,nebo b,c,d")
            let city2 = ["a. Labe", "b. Ohře", "c. Vltava", "d. Lužnice"];

            for (let i = 0; i < city2.length; i++) {
                console.log(city2[i]);
            }


            let city1 = prompt("Která řeka protéká Prahou?  ");{


                let city = ["Vltava"];{

                    // city.pop();
                    console.log(city);

                }
                if (city1)
                    if (city1.includes("Vltava") || (city1.includes("vltava")) || city1.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//2. Otazka


            console.log("2.otázka:  Která řeka protéká Brnem ? ")
            console.log("napiš: a,nebo b,c,d")
            let city3 = ["a. Dyje", "b. Svitava", "c. Morava", "d. Bečva"];

            for (let i = 0; i < city3.length; i++) {
                console.log(city3[i]);
            }
            let city4 = prompt("Která řeka protéká Brnem?  ");{

                let citya = ["Svitava"];{
                    console.log(citya);
                }
                if (city4)
                    if (city4.includes("Svitava") || city4.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//3. Otazka


            console.log("3.otázka:  Která řeka protéká Ostravou? ")
            console.log("napiš: a,nebo b,c,d")
            let city5 = ["a. Odra", "b. Morava", "c. Bečva", "d. Ostravice"];

            for (let i = 0; i < city5.length; i++) {
                console.log(city5[i]);
            }
            let city6 = prompt("Která řeka protéká Ostravou?  ");{

                let cityb = ["Ostravice"];{
                    console.log(cityb);
                }
                if (city6)
                    if (city6.includes("Ostravice") || city6.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//4. Otazka

            console.log("4.otázka:  Která řeka protéká Olomoucem? ")
            console.log("napiš: a,nebo b,c,d")
            let city7 = ["a. Morava", "b. Bečva", "c. Moravice", "d. Orlice"];

            for (let i = 0; i < city7.length; i++) {
                console.log(city7[i]);
            }
            let city8 = prompt("Která řeka protéká Olomoucem?  ");{

                let cityc = ["Morava"];{
                    console.log(cityc);
                }
                if (city8)
                    if (city8.includes("Morava") || city8.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
// 5. Otazka

            console.log("5.otázka:  Která řeka protéká Plzni? ")
            console.log("napiš: a,nebo b,c,d")
            let city9 = ["a. Berounka", "b. Mže", "c. Ohře", "d. Otava"];

            for (let i = 0; i < city9.length; i++) {
                console.log(city9[i]);
            }
            let city10 = prompt("Která řeka protéká Plzni?  ");{

                let cityd = ["Mže"];{
                    console.log(cityd);
                }
                if (city10)
                    if (city10.includes("Mze") || city10.includes("b")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//6. Otazka

            console.log("6.otázka:  Která řeka protéká Karlovy Vary? ")
            console.log("napiš: a,nebo b,c,d")
            let city9a = ["a. Labe", "b. Jizera", "c. Ohře", "d. Otava"];

            for (let i = 0; i < city9a.length; i++) {
                console.log(city9a[i]);
            }
            let city10a = prompt("Která řeka protéká Karlovy Vary?  ");{

                let cityd = ["Ohře"];{
                    console.log(cityd);
                }
                if (city10a)
                    if (city10a.includes("Ohre") || city10a.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//7. Otazka

            console.log("7.otázka:  Která řeka protéká Zlínem? ")
            console.log("napiš: a,nebo b,c,d")
            let city11 = ["a. Bečva", "b. Morava", "c. Olše", "d. Dřevnice"];

            for (let i = 0; i < city11.length; i++) {
                console.log(city11[i]);
            }
            let city12 = prompt("Která řeka protéká Zlínem?  ");{

                let citye = ["Dřevnice"];{
                    console.log(citye);
                }
                if (city12)
                    if (city12.includes("Drevnice") || city12.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//8. Otazka

            console.log("8.otázka:  Která řeka protéká Táborem? ")
            console.log("napiš: a,nebo b,c,d")
            let city13 = ["a. Lužnice", "b. Vltava", "c. Otava", "d. Nežarka"];

            for (let i = 0; i < city13.length; i++) {
                console.log(city13[i]);
            }
            let city14 = prompt("Která řeka protéká Táborem?  ");{

                let cityf = ["Lužnice"];{
                    console.log(cityf);
                }
                if (city14)
                    if (city14.includes("Luznice") || city14.includes("a")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//9. Otazka

            console.log("9.otázka:  Která řeka protéká Ústí nad Labem? ")
            console.log("napiš: a,nebo b,c,d")
            let city15 = ["a. Bystřice", "b. Jizera", "c. Labe", "d. Úpa"];

            for (let i = 0; i < city15.length; i++) {
                console.log(city15[i]);
            }
            let city16 = prompt("Která řeka protéká Ústí nad Labem?  ");{

                let cityg = ["Labe"];{
                    console.log(cityg);
                }
                if (city16)
                    if (city16.includes("Labe") || city16.includes("c")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
//10. Otazka

            console.log("10.otázka:  Která řeka protéká Opavou? ")
            console.log("napiš: a,nebo b,c,d")
            let city17 = ["a. Morava", "b. Bečva", "c. Odra", "d. Opava"];

            for (let i = 0; i < city17.length; i++) {
                console.log(city17[i]);
            }
            let city18 = prompt("Která řeka protéká Opavou?  ");{

                let cityh = ["Opava"];{
                    console.log(cityh);
                }
                if (city18)
                    if (city18.includes("Opava") || city18.includes("d")){
                        console.log("---DOBŘE---");

                    } else {
                        console.log("ŠPATNÁ ODPOVĚĎ!!!");
                    }

            }
            menu();
        }
        if (odpoved === "6") {
            console.log("Program ukončen. Nashledanou!");
            rl.close();
        }
        if (odpoved !== "1" && odpoved !== "2" && odpoved !== "3" && odpoved !== "4" && odpoved !== "5" && odpoved !== "6") {
            console.log("Neplatná volba, zkus to znovu.");
            menu();
        }

    });


}



           console.log("Výběr OTÁZEK z Matematiky a ze Zeměpisu!");
           menu();