function select() {
  var id = location.hash.substring(1)

  if(id ==="") {
    id = "main"
  }

  var contentSelected= document.querySelector(".content.selected")
  contentSelected.classList.remove("selected")

  var newSelected = document.getElementById(id)
  newSelected.classList.add("selected")

  var buttonSelected= document.querySelector("nav li.selected")

  if(buttonSelected != null) {
    buttonSelected.classList.remove("selected")
  }

  var newButton = document.getElementById(id + "-button")
  if(newButton != null){
    newButton.classList.add("selected")

  }

  console.log(newButton)
}

window.addEventListener('hashchange', function(){
  select()
});

window.addEventListener('load', function(){
  select()
});
