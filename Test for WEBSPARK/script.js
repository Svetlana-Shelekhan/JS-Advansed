// Получаем элемент с атрибутом class="column"
var elements = document.getElementsByClassName("column");

// Декларируем переменную для цикла
var i;

// Отображение в виде списка
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Отображение в виде сетки
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "40%";
  }
}

