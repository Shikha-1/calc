let input = document.getElementById("input");
let button = document.querySelectorAll("button");
function insert(num) {
  input.value = input.value + num;
}
function equal() {
  var exp = input.value;
  if (exp) {
    input.value = eval(exp);
  }
}
document.getElementById("ac").addEventListener("click", function clear() {
    input.value = "";
})
