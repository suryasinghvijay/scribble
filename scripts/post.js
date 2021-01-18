document.getElementById("editButton").onclick = function(){
	document.getElementById("title").contentEditable = true;
	document.getElementById("detials").contentEditable = true;
	document.getElementById("editButton").style.display = "none"
	document.getElementById("saveButton").style.display = "block"
}

document.getElementById("saveButton").onclick = function(){
	document.getElementById("editButton").style.display = "block"
	document.getElementById("saveButton").style.display = "none"
	document.getElementById("title").contentEditable = false;
	document.getElementById("detials").contentEditable = false;
}

var likeCount = 0;
function likeCounter(){
	likeCount +=1;
	if(likeCount === 1){
		document.getElementById("likeCount").innerHTML = likeCount+" person likes this!"
	} else if(likeCount > 1){
		document.getElementById("likeCount").innerHTML = likeCount+" people like this!"
	} else {
		document.getElementById("likeCount").innerHTML = "Be the first one to like this!"
	}
}
var array=[];
function addComment(){
	 var textarea = document.getElementById('addComment');
   array = textarea.value;
//	 commentsArrayList.push(array)
	var commentTemplet = '<section id="commentBorder">'+
	'<p id="commentText">'+
			array+
		'</p>'+
	'</section>';
	document.getElementById('commentList').innerHTML += commentTemplet

//	console.log(commentsArrayList)
}