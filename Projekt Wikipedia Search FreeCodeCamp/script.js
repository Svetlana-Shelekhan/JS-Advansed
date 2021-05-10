let searchInput = document.getElementById('searchInput');
searchForm.addEventListener('submit', (e)=> {
e.preventDefault();
displaySearchResults(searchInput.value);
})
function displaySearchResults(x){    
let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${x}`;
    

fetch(url)
.then(function(response) {
return(response.json());
})
.then(function(data){
let resultsArray = data.query.search;
resultsOnPage(resultsArray);
})
.catch(function () {
console.log('An error occurred');
});


}


function resultsOnPage(myArray){
resultsList.innerHTML = " ";
resultsList.insertAdjacentHTML('beforeend', `<h2>Search Results for ${searchInput.value} </h2>`);
myArray.forEach(function(item){    

let itemTitle = item.title;
let itemSnippet = item.snippet;
let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);  


resultsList.insertAdjacentHTML('beforeend',   
`<div class="resultItem">
<h3 class="resultTitle">
<a href="${itemUrl}" target="_blank" >${itemTitle}</a>
</h3>
<p class="resultSnippet"><a href="${itemUrl}"  target="_blank">
${itemSnippet}</a></p>
</div>`
);

})


}



