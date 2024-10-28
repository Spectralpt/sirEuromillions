async function getNumbers() {
    //const numbers = document.getElementById("numbers")
    //const stars = document.getElementById("stars")

    const numbers = document.getElementsByClassName("numbers")
    const stars = document.getElementsByClassName("stars")

    const res = await fetch("/euro")

    let data = await res.json()

    //numbers.innerText = data["key"]["numbers"]
    //stars.innerText = data["key"]["stars"]

    const numbersArray = data["key"]["numbers"]
    Array.from(numbers).forEach((element, index) => {
        element.innerText = numbersArray[index]
    })

    const starsArray = data["key"]["numbers"]
    Array.from(stars).forEach((element, index) => {
        element.innerText = starsArray[index]
    })
}

