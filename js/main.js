// var myH1 = document.getElementById("myH1");
// myH1.innerText = "comment App"
// var emptyArray = [];
// var myList = document.getElementsByTagName("ul")[0];


// function todoList() {
// 	var userInput = document.getElementsByTagName("Input")[0].value;
// 	console.log(userInput);
// }
function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}