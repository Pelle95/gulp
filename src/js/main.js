function showMenu() {
    var menuEl = document.getElementById("main-nav-ul");

    if (menuEl.className === "shown") {
        menuEl.className += " responsive";
    } else {
        menuEl.className = "shown";
    }
}