/*buttonBurger*/


function burgerMenu(event) {
  const button = document.getElementById("menuBurgerFunction");
  const second = document.getElementById("SecondNav");
  button.classList.toggle("change");
  second.classList.toggle("change");
  if (second.classList.contains('show')) {
    second.classList.remove('show');
    second.classList.add('hide');
  } else {
    second.classList.remove('hide');
    second.classList.add('show');
  }
}





