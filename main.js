let testoProva = document.querySelector(`.testoProva`);

let btnColor = document.querySelector(`#btn-color`);
let btnBold = document.querySelector(`#btn-bold`);
let btnToggle = document.querySelector(`#btn-toggle`);

btnBold.addEventListener("click", () => {
    testoProva.classList.toggle(`grassetto`)
});

btnToggle.addEventListener("click", () => {
    testoProva.classList.toggle(`displayNone`)
})

btnColor.addEventListener("click", () => {
    testoProva.toggle(rgb())
})


function rgb() {
    let numerocasuale = Math.floor(Math.random() * (3 - 1 +1) + 1)

    switch (numerocasuale) {
        case 1:
            testoProva.style.color = `rgb(255, 0, 0)`
            break;
        case 2:
            testoProva.style.color = `rgb(0, 255, 0)`
            break;
        case 3:
            testoProva.style.color = `rgb(0, 0, 255)`
            break;
    
        default:
            break;
    }

}



