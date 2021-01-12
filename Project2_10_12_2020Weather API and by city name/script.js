 
//1.Navigation DOM - объявить все елементы, которые нам необходимы li, p,button 
//2. Add event listener -инициализация событий на кнопке
//3. Get coords - погоду ищем по текущему местоположению(координаты моего местонахождения)
//4. Make HTTP request - НТТР запрос
//5. Display data - данные которые мы отображаем
//6.Transform data - перевод данных из F в С



//1.Navigation DOM
 var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherSubmit = document.getElementById('get-weather-name-city');

//3. Get coords 
function getLocationCoords() {
  var city_name = document.getElementById('city_name').value;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((Position) => {
      if (city_name.length < 2) {
        getWeatherData(Position.coords.latitude, Position.coords.longitude, null);
      } else {
        getWeatherData(null, null, city_name);
      }
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function getWeatherData(latitude, longitude, city_name) {
    if(latitude && longitude){
      fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=fec867dce58ee97728d0e7a670ffac9d')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          displayData(data);
        })
    }
    else {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=fec867dce58ee97728d0e7a670ffac9d`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          displayData(data);
        })
    }
}

function displayData(data) {
  document.querySelector('.cityname').innerText = data.name + ' - город';
    temperature.innerText = kToC(data.main.temp) + '°' + ' температура';
    pressure.innerText = hPammHg(data.main.pressure) + ' mmHg' + ' - давление';

   windSpeed.innerText = recievedWeatherData(data.wind.speed) + ' km/h' + ' - скорость ветра';
   humidity.innerText = recievedWeatherData(data.main.humidity) + ' %' + ' - влажность';
    console.log(data);
}

function kToC(k) {
    return Math.round(k - 273.15);   //Из Кельвин в Цельсия
}

function hPammHg(bf){
    return Math.round(bf / 1.333);  //преобразование из гПа в мм.рт.ст.
}

function recievedWeatherData(sp, hum){
return sp;
return hum;
}


//2. Add event listener
getWeatherSubmit.addEventListener('click', getLocationCoords);
getLocationCoords();
getWeatherSubmit.addEventListener('click', move);


 function move() {
  var elem = document.getElementById("greenBar");
var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      } else {   width++;
        elem.style.width = width + '%';  
             elem.innerHTML = width * 1  + '%';
  }
 }
}