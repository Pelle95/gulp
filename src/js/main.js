function showMenu() {
    var menuEl = document.getElementById("main-nav-ul");

    if (menuEl.className === "shown") {
        menuEl.className += " responsive";
    } else {
        menuEl.className = "shown";
    }
}

const arr = [1, 5, 8, 10, 12, 15, 18];
const filtered = arr.filter(number => number > 10);
console.log(filtered);

const arr2 = [5, 10, 15];
const mapped = arr2.map(number => number * 2);
console.log(mapped);

let greeting = namn => `Hej ${namn}!`;
console.log(greeting("Pelle"));