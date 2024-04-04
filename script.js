document.title = "Random Password Generator"

const passBox = document.getElementById("pass-box")
const upperCase = document.getElementById("upper-case")
const lowerCase = document.getElementById("lower-case")
const numberCase = document.getElementById("numbers")
const symbolCase = document.getElementById("symbols")
const btn = document.getElementById("btn")


const generatePassword = () => {

    const totalCharInput = document.getElementById("total-char").value
    const length = parseInt(totalCharInput)

    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerSet = "abcdefghijklmnopqrstuvwxyz"
    const numberSet = "0123456789"
    const symbolSet = "!@#$%^&*()_+=-<>?"

    let allowedChar = ""
    let password = ""

    if(upperCase.checked) {
        allowedChar += upperSet
    }
    if(lowerCase.checked) {
        allowedChar += lowerSet
    }
    if(numberCase.checked) {
        allowedChar += numberSet
    }
    if(symbolCase.checked) {
        allowedChar += symbolSet
    }

    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * allowedChar.length)
        password += allowedChar[randomIdx]
    }

    passBox.textContent = password
}

btn.addEventListener("click", generatePassword)