const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener('input', evt => {
    span.style.fontSize = input.value + "px";
    console.log(span.style)
})