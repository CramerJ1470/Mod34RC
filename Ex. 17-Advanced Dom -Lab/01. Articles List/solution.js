function createArticle() {
	console.log(`hello`);

	let articleTitle = document.getElementById("createTitle");
	let articleContent = document.getElementById("createArticle");

	let articles = document.createElement("articles");

	let articlesListSection = document.getElementById("articles");
	let articleTitleh3 = document.getElementById("h3");
	articleTitleh3.innerHTML = articleTitle;
	let articlesContent = document.getElementById("p");
	articlesContent.innerHTML = articleContent;

	articlesListSection.appendChild(articleTitleh3);
	articlesListSection.appendChild(articleContent);

	articlesListSection.appendChild(articles);
	articlesListSection = "";
	articleContent = "";
}
