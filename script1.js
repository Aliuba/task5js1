// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
//  Вывести каждую при помощи console.log , alert, document.write
let hello = 'hello',
    owu = 'owu',
    com = 'com',
    ua = 'ua',
    a = 1,
    b = 10,
    c = -999,
    d = 123,
    pi = 3.14,
    e = 2.7,
    g = 16;
let t = true,
    f = false;
let arr = [hello, owu, com, ua, a, b, c, d, pi, e, g, t, f]
for (const item in arr) {
    console.log(arr[item]);
    alert(arr[item]);
    document.write(arr[item]);

}
// - переопределить каждую переменную из задания 1 дав им произвольные значения
//  Вывести каждую при помощи console.log , alert, document.write
// return Math.floor(Math.random() * (max - min)) + min;
for (const item in arr) {
    arr[item] = Math.random() * (100 - 0) + 0;
    console.log(arr[item]);
    alert(arr[item]);
    document.write(arr[item]);
}

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const a = 1,
    b = 2,
    c = 3,
    d = "ffff",
    f = "ddjfk",
    h = "kjfkfd";
let arr2 = [a, b, c, d, f, h]
for (const item in arr2) {
    console.log(arr2[item]);
    alert(arr2[item]);
    document.write(arr2[item]);
}

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
//  Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let surname = prompt("What is your surname"),
    name = prompt("What is your name"),
    patronymic = prompt("What is your Patronymic");
for (const item in arr2 = [surname, name, patronymic]) {
    console.log(arr2[item]);
    alert(arr2[item]);
    document.write(arr2[item]);
}
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let surname = prompt("What is your surname"),
    name = prompt("What is your name"),
    patronymic = prompt("What is your Patronymic"),
    person = surname + " " + name + " " + patronymic;
console.log(person);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
for (let i = 0; i < 4; i++) {
    let surname = prompt("What is your surname"),
        name = prompt("What is your name"),
        patronymic = prompt("What is your Patronymic"),
        person = surname + " " + name + " " + patronymic;
    console.log((i + 1) + " " + person);
}
// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
for (let i = 0; i < 3; i++) {
    let a = prompt("Введіть число");
    console.log(+(a) + "/");
}
// при помощи prompt() получить 4 числа.
//  Привести их к числовому типу при помощи parseInt. 
//  Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let result = 0;
for (let i = 0; i < 4; i++) {
    let a = prompt("Введіть число");
    result = result + parseInt(a);
}
console.log(result)

// - при помощи prompt()  получить 3 числа с плавающей точкой.
//  при помощи parseFloat привести их к соответсвующему типу. 
//  Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let result = 0;
for (let i = 0; i < 4; i++) {
    let a = prompt("Введіть число з плаваючою крапкою");
    result = result + parseFloat(a);
}
console.log(result)

// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// Округлить их при помощи Math.round 
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let result = 0;
for (let i = 0; i < 4; i++) {
    let a = prompt("Введіть число з плаваючою крапкою");
    result = result + Math.round(a);
}
console.log(result)

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// Первое число - это число которое будут возводить в степень. 
// Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let a = prompt("Введіть основу степеня")
let b = prompt("Введіть показник степеня")
console.log(Math.pow(a, b))

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль

let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную

let a = (5 < 6) //-> true
let b = (5 > 6) //-> false
let b = (5 == 6) //-> false
let b = (5 === 6) //-> false
let b = (10 === 10) //-> true
let b = (10 == 10) //-> true
let b = (10 != 10) //-> false
let b = (10 > 10) //-> false
let b = (10 < 10) //-> false
let b = (123 === '123') //-> false
let b = (123 == '123') //-> true

//     Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12); //false
console.log(34 > 33 && 23 < 90);
true
console.log(99 > 100 && 45 > 12);
f
console.log(132 > 100 || 45 < 12);
t
console.log(111 > 11 || 45 < 111);
t
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));
f
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));
t
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));
f
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));
t
console.log(!!'-1');
t
console.log(!!-1);
t
console.log(!!'0');
f
console.log(!!'null');
f
console.log(!!'undefined');
f
console.log(!!(3 / 'owu'));
f
console.log((111 > 11 || 45 < 111) || !!'0');
t
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));
f

// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

let str = "Hello",
    num = 123,
    flag = true,
    txt = "true";
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt))
    // 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) 
    // найдите значения выражений:
    //     5 + 3,
    //     5 - 3,
    //     5 * 3,
    //     5 / 3,
    //     5 % 3
    //     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

let height = 23,
    width = 10,
    s = height * width;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
let heightC = 10,
    dC = 4,
    pi = Math.PI,
    v = Math.pow((dC / 2), 2) * pi * heightC;
console.log(v);
// 6. У прямоугольного треугольника две стороны n(со значением 3) и m(со значением 4).
// Найдите гипотенузу k по теореме Пифагора(нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3,
    m = 4,
    k = Math.sqrt(n ** 2 + m ** 2);
console.log(k)

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str
// и выводить спомощью document.write, alert и console.log

let str = "Hello world";
document.write(str);
alert(str);
console.log(str)

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби(каждой на новой строки спомощью\ n).
alert("Атаманюк Любов Сергіївна \n 38 \n zumba")

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Кто ',
    str2 = 'ты ',
    str3 = 'такой?',
    oncatenation = document.write(str1 + str2 + str3)


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
205 коли додавати, то він вміє додавати стрінги і робить конкатинацію, всі решта дії він думає, що це число
document.write(str - a + "<br/>");
15
document.write(str * "2" + "<br/>");
40
document.write(str / 2 + "<br/>");
10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
parseInt("3.14") 3
parseInt("-7.875") - 7
parseInt("435") 435
parseInt("Вася") NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
//  которые будут использоваться далее, повторите код ниже


let str = prompt("Enter something", "ho-ho")
console.log(str);
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let a = prompt("введіть число а", "a"),
    b = prompt("введіть число b", "b");
alert(+a + (+b))

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32, а вывод результата при помощи метода alert
let name = prompt("What is your name"),
    surname = prompt("What is your surname"),
    age = prompt("How old are you?"),
    person = name + " " + surname;
alert("Доброго вечера " + person + " мои поздравления что вам " + age)

// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню

let a = +prompt("input a", "a");
let b = +prompt("input b", "b");
let c = +prompt("input c", "c");
let t;
let max;
if (a >= b) {
    t = a;
} else { t = b };
if (t >= c) {
    max = t;
} else { max = c };
console.log(max + "max")

// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let behavior = prompt("Input lights: green, amber, red, else")
switch (behavior) {
    case "green":
        console.log("let's go")
        break
    case "amber":
        console.log("wait")
        break
    case "red":
        console.log("stop")
        break
    default:
        console.log("do what you want")

}

// // 3
// Все параметры получаем с клавиатуры!!!!(prompt, confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть - вывести подожди пока нарушители проедут ".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет - вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let behavior = prompt("Input lights: green, amber, red, else")
let isRoadClear = confirm("Is Road Cler")
switch (behavior) {
    case "green":
        behavior = "иди";
        break;
    case "amber":
        behavior = "все рано жди";
        break
    case "red":
        behavior = "стой все рано";
        break
    default:
        behavior = "делай что хочешь";
}

if (isRoadClear) {
    if (behavior == "иди") {
        behavior = "подожди пока нарушители проедут";
    } else if (behavior == "все рано жди") {
        behavior = "жди";
    } else if (behavior == "стой все рано") {
        behavior = "стой и жди";
    }
}
console.log(behavior)