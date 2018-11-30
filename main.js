let input = document.getElementById("message");
let articleEl = document.getElementById("art1");
let articleEl2 = document.getElementById("art2");

input.addEventListener("keyup", function (event) {
   articleEl.innerHTML = event.target.value
})

input.addEventListener("keyup", function (event) {
   articleEl2.innerHTML = event.target.value
})

// let textField = document.getElementById('keypress-input');

// textField.addEventListener("keyup", function(event) {
//     article_1.innerHTML = event.target.value
//     article_2.innerHTML = event.target.value
// }) 