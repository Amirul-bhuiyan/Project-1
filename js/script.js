// ===============Dom element start here================
let input = document.querySelector (".input")
let button = document.querySelector (".button")
let names = document.querySelector (".names")
let allarea = document.querySelector (".allarea")
let allarea1 = document.querySelector (".allarea1")
let username = document.querySelector (".username")
// ================Functionality======================
button.addEventListener ("click", ()=>{
  if (input.value ==""){
    alert ('Type your name')
  }else{
    allarea.style.display = "none"
    username.innerHTML = input.value
    allarea1.style.display = "block"
    input.value = ""
  }
})