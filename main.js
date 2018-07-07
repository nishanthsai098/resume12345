   function LoadJson(file,callback){
   var a=new XMLHttpRequest();
   a.overrideMimeType("application/json");
   a.open("GET",file,true);
   a.onreadystatechange=function(){
  if (a.readyState===4 && a.status=="200")
    {
    callback(a.responseText);
    }
   }
   a.send(null);
}
LoadJson("data.json",function(text) {
   let data=JSON.parse(text);
   console.log(data);
   career(data.basics);
 });

 var right=document.getElementById('right');

 function career(edu){
 var career=document.createElement("h3");
 career.textContent="Career obj:";
 right.appendChild(career);
var hr=document.createElement("hr");
right.appendChild(hr);
var p=document.createElement("p");
p.textContent=edu.co;
right.appendChild(p);
}
