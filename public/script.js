async function getNumbers() {
    const numbers = document.getElementById("numbers")
    const stars = document.getElementById("stars")

    const res = await fetch("/euro")

    let data = await res.json()

    numbers.innerText = data["key"]["numbers"]
    stars.innerText = data["key"]["stars"]
}

