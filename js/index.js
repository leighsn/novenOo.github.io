var url ="https://api.github.com/users/novenOo/repos?sort=created&per_page=5"
$(document).ready(function(){
	clickBtn();
});
function clickBtn(){
	$("#current").click(function(e){
		$.get(url, function(data){
			console.log(data);
		})

	})
}