console.log("hello");
function randomImageGenerator()
{
	var randNum = Math.floor(Math.random()*2);
	return randNum;
}
var imgArray = ["down-left.jpg", "down-right.jpg"];
var div = document.getElementById('childOfBody');
var img = document.createElement('img');
div.appendChild(img);
div.addEventListener("click",function()
{
	console.log("hi");
	var rand = randomImageGenerator();
	console.log(rand);
	img.setAttribute("src",imgArray[rand]);

})