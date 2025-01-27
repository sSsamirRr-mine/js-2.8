'use strict';

let id = document.getElementById('id')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let eye = document.getElementById('eye')

btn.disabled = true

function act() {

    if (id.value && password.value) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }

}


id.addEventListener("input", () => {
    act()
})

password.addEventListener("input", () => {
    act()
})

eye.addEventListener("click", () => {
    if (password.type == "password" && password.value) {
        password.type = "text"
    } else {
        password.type = "password"
    }
})

let sec = document.querySelector("section")
let main = document.querySelector("main")
let dive = document.createElement("section")

btn.addEventListener("click", () => {

    if (password.value == "NIIGTPST8" && id.value == "993") {
        localStorage.setItem("par", "NIIGTPST8")
        localStorage.setItem("id", "993")

        if (localStorage.getItem("name")) {

        } else {
            let Name = prompt("Name?")
            localStorage.setItem("name", Name)
        }


    }

})

let avatar = document.createElement("div")
let daraja = document.createElement("div")
let h1 = document.createElement("h1")
let h3 = document.createElement("h1")
h1.innerHTML = localStorage.getItem("name")
let coint = document.createElement("h2")
let LogOut = document.createElement("button")
LogOut.innerHTML = "Log Out"
LogOut.classList = 'log'
main.classList = 'container'
main.style.display = "flex"
main.style.justifyContent = "center"
h1.classList = 'ism'
coint.classList = "coin"
avatar.classList = 'avatar'
daraja.classList = 'daraja'
h3.innerHTML = "<p>DS - 713 | Farrux Mengaboyev</p>"
h3.classList = 'op'

if (localStorage.getItem('par') == 'NIIGTPST8' && localStorage.getItem('id') == 993) {

    sec.remove()
    dive.classList = "fox", 'container'
    main.appendChild(dive)

    dive.appendChild(avatar)
    dive.appendChild(daraja)
    dive.appendChild(h1)
    dive.appendChild(h3)
    dive.appendChild(coint)
    dive.appendChild(LogOut)


} else {
    localStorage.clear()
}

LogOut.addEventListener("click", () => {
    let confrim = confirm("Siz aniq chiqmoqchimisiz?")

    if (confrim == true) {
        localStorage.clear("id")
        localStorage.clear("par")
        localStorage.clear("name")

        dive.remove()
        main.innerHTML = (`        <section class="section-one container">
            <div class="section-header">
                <img src="./Img/Logo.png" alt="" />
                <div class="abdunur_sila">
                    <h5>Offerta imzolash</h5>
                    <img src="./Img/Vector.png" alt="" />
                </div>
            </div>
            <h1 id="h1s">Spacega xush kelibsiz</h1>
            <div class="choose">
                <p class="student">O’quvchiman</p>
                <p class="parents">Ota-onaman</p>
            </div>
            <form>
                <input id="id" placeholder="Modme Id '993' " type="text" />

                <div class="password">
                    <input id="password" placeholder="password 'NIIGTPST8'" type="password" />
                    <img id="eye" class="eye" src="./Img/Eye.png" alt="" />
                </div>
                
                <button id="btn" d>
                    <p id="rem">Submit</p>
                </button>

            </form>
        </section>`)
    }
})



















