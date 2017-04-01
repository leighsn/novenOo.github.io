var url ="https://api.github.com/users/novenOo/repos?sort=created&per_page=5"
$(document).ready(function(){
	clickBtn();
});
function clickBtn(){
	$("#current").click(function(e){
		$.get(url, function(data){
			data.forEach(createRepositoryHtml)
			createRepositoryHtml(repo)
			console.log(data);
		})
	})
}


function createRepositoryHtml(repo){
	var html = `
	<div class="">
		<a href=${repo.html_url}><p>${repo.name}</p></a>
		//put other information here
	</div>
	`
	$("#repos").append(html);
}
