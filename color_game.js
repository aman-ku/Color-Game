var colors=[];
for(var i=0;i<6;i++)
{
	colors[i]=generatecolor();	
}
var square=document.querySelectorAll(".square");

function colorgenerate()
{
	var c=Math.floor((Math.random()*6)+1);
	return colors[c];
}
var picked=colorgenerate();
var update=document.querySelector("#update");
update.textContent=picked;
function generatecolor()
{

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var l="rgb("+r+", "+g+", "+b+")";
	return l;	
}


for(var j=0;j<square.length;j++)
{
	square[j].style.background=colors[j];
}
for(var k=0;k<6;k++)
{
	square[k].addEventListener("click",function()
	{
		var choose=this.style.background;
		if(choose===picked)
		{
			alert("Hurray,You Won :)");
			for(var u=0;u<6;u++)
			{

				square[u].style.background=picked;
				
			}
		}
		else
		{
			this.style.background="#232323";
			alert("Try again");
		}
	});
}