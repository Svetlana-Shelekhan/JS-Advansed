
//отрисовка времени публикации, комментариев и имени        
let comments = [];
loadComments();
document.getElementById('comment-add').onclick = function(){
  event.preventDefault();
  let commentName = document.getElementById('name');
  let commentBody = document.getElementById('comment');

  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now()/1000)
  }
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
  if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
  showComments();
}

function showComments(){
  let commentField = document.getElementById('comment-field');
  let out = '';
  comments.forEach(function(item){
    out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
    out += `<p class="alert alert-primary">${item.name}</p>`;
    out += `<p class="alert alert-success">${item.body}</p>`;
    out += `<hr>`;
  });
  commentField.innerHTML = out;
}

function timeConverter(UNIX_timestap){
  var a = new Date(UNIX_timestap * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}


var messageElement = document.querySelector('#feedback');
var form = document.querySelector('form');

  form.addEventListener('submit', function (ev) {
    var formData = new FormData(form);
    commentValue = commentArea.value;
    nameValue = nameInput.value;
console.log(commentValue);
console.log(nameValue);
    var xhr = new XMLHttpRequest();
    // save the comment in the database
    xhr.open('POST', './save', true);
    xhr.onload = function () {
      appendComment(nameValue, commentValue);
    };
    xhr.onerror = function (error) {
      messageElement.className = 'message error';
      messageElement.textContent = 'There was an error posting the comment. Please try again later.';
    };
    xhr.upload.onprogress = function (evt) {
      messageElement.className = 'message info';
      messageElement.textContent = 'Uploading: ' + parseInt(evt.loaded/evt.total*100, 10) + '%';
    };
    xhr.upload.onloadend = function (evt) {
      if ('serviceWorker' in navigator && !navigator.onLine && !navigator.serviceWorker.controller) {
        
      } else {
        messageElement.className = 'message success';
        messageElement.textContent = 'Your comment was posted sucessfully.';
      }
    };
    xhr.send(formData);


    ev.preventDefault();
  });



var divResalt = document.querySelector('#comment-field');
var api = 'https://jordan.ashton.fashion/api/goods/30/comments';

fetch(api)
  .then(response => response.json())
  .then(json => {
    divResalt.innerHTML = json.map(x => 

      `<div id="comment-field">
                              <p>${x.text}</p>
                              <p>${x.text}</p>
                              <hr>
                              </div>`

    ).join('');
  })
  .catch(error => {
    console.error('Error loading');
    divResalt.innerHTML = `<h1>Error Loading</h1>`;
  });