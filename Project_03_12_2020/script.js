 // 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote

// Navigation
var p = document.getElementById('quote');
var button = document.querySelector('button');

var quotes = [
'Единственный способ жить хорошо - сразу уходить оттуда, где плохо.', 
'Даже если вас сломали - прорастайте заново.', 
'Счастье - это когда твои родители здоровы.',
'Если вы хотите иметь то, что никогда не имели,-начните делать то, что никогда не делали',
'Всегда выбирайте самый трудный путь - там вы не встретите конкурентов',
'Там, где кончается терпение, начинается выносливость.',
'Покорив одну гору, начинай штурмовать другую...',
'Самый лучший способ встряхнуть себя - это встряхнуть кого-нибудь другого.',
'Птицы поднимаются выше, когда летят против ветра',
'Чтобы дойти до цели, надj прежде всего идти!'
];

function getRandomQuote() {
    // logic here

  var x = quotes[Math.floor(Math.random()*quotes.length)];
  p.innerHTML = x;
}   


// Get random quote on init
getRandomQuote();

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);
