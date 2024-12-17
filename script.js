function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    //const result = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(min, max)
    //alert(result)
    let p = document.querySelector("p")

if ( min > max) {
    alert (`ATENÇÂO!
    Não pode o valor mínimo ser maior que o valor máximo!`)
}

else {
const result = Math.floor(Math.random() * (max - min + 1)) + min; {
    p.innerHTML = `${result}`
}
}
}
