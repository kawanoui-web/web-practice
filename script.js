console.log("JavaScriptが動いています");
let name = "河野羽衣";
console.log(name);

let age = 19;
console.log(age);

let introduction = name + "は" + age + "歳です";
console.log(introduction);

function greet(personName) {
    console.log("こんにちは、"+ personName + "さん");
}

greet("河野羽衣");
greet("田中太郎");

let score = 70;

if (score !== 60) {
    console.log("合格です");
} else {
    console.log("不合格です");
}

let fruits = ["りんご", "バナナ", "みかん"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let fruitListDiv = document.getElementById("fruit-list");
let listHTML = "";

for (let i = 0; i < fruits.length; i++) {
    listHTML = listHTML + "<p>" + fruits[i] + "</p>";
}

fruitListDiv.innerHTML = listHTML;