let botaoporEl = document.querySelector(".imparoupar").addEventListener('click', getRandomInt);

function getRandomInt() {
    let n = Math.floor(Math.random() * 100)

    if(n%2 == 0){
        alert("Par");
    }else{
        alert("Impar");
    }
    console.log(n)
}
