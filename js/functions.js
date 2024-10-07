


let taulukko = document.getElementById('Jokeritaulukko')
let uusirivinappi = document.getElementById('nappi').addEventListener('click', lisaa_rivi)
let rivienmaara = document.getElementById('rivilaskuri')

function lisaa_rivi() {
    let rivi = taulukko.insertRow(0)
    i=0
    while (i<=6) {
        let sarake = rivi.insertCell(i)
        let satunnainenluku = Math.floor(Math.random()*10)
        sarake.innerHTML = satunnainenluku
        const rivit = taulukko.rows.length
        rivienmaara.textContent = `Valmiita rivejä ${rivit}`
        i++
    }
}

const rivit = taulukko.rows.length
rivienmaara.textContent = `Valmiita rivejä ${rivit}`