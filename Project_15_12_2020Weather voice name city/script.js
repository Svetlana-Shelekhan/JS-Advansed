 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


//1.Navigation DOM
 var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');

var recognition = new SpeechRecognition();
recognition.lang = 'ru';
recognition.interimResults = true;

var words = document.querySelector('.words');
var p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', function (event) {
    p.innerText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            return result.transcript;
        })

    if(event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
})

recognition.addEventListener('end', recognition.start); //запуск микрофона
recognition.start();
recognition.addEventListener('end', getLocationCoords);

//3. Get coords 
function getLocationCoords() {
    var city_name document.getElementById('city_name').value;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherData(latitude, longitude, p) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=fec867dce58ee97728d0e7a670ffac9d`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          displayData(data);
        })
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