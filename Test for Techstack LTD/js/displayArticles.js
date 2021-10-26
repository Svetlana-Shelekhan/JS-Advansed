// Display found articles
function displayArticles(articlesArr) {
console.log(articlesArr);
    suggestions.innerHTML = articlesArr.map(function (article) {
      return `
        <li>
        <img src="${article.image}" width="150px" height="150px"/>
          <a href="${article.url}" target="_blank"><h2>${article.header}</h2></a>
          <div>${article.description}</div>
          <span>${article.sectionName}. ${article.typeOfMaterial}. ${article.publikDate}</span>
        </li>
      `;
    }).join('');
  }