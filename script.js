

 var search = document.querySelector('button');
 search.addEventListener("click",function(){
 	var text = document.querySelector('input').value;
 	alert(text);
 	 document.querySelector('input').value= '';
 	console.log(text);
 });
