//Nav Element
var x = document.createElement("NAV");   
    document.body.appendChild(x);

    var anchorElmnt = document.createElement("A");
    anchorElmnt .setAttribute("href", "google");
    var txt1 = document.createTextNode("GOOGLE");
    anchorElmnt .appendChild(txt1);

    x.appendChild(anchorElmnt);

//h1 Element
var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

//P Element
var newP =  document.createElement("p")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

//Ol Element
var g = document.createElement("OL"); 
g.setAttribute("id", "hope"); 
document.body.appendChild(g); 

//Li 1
var x = document.createElement("LI"); 
var y = document.createTextNode("First LI"); 
x.appendChild(y); 
document.getElementById("hope").appendChild(x); 

//Li 2
var w = document.createElement("LI"); 
var f = document.createTextNode("Second LI"); 
w.appendChild(f); 
document.getElementById("hope").appendChild(w);

//Li 3
var r = document.createElement("LI"); 
var t = document.createTextNode("Third LI"); 
r.appendChild(t); 
document.getElementById("hope").appendChild(r);

//Footer Element
var x = document.createElement("FOOTER");
  x.setAttribute("id", "myFooter");
  document.body.appendChild(x);

  var y = document.createElement("P"); 
  var t = document.createTextNode("This is a p element in a footer element.");
  y.appendChild(t);

  document.getElementById("myFooter").appendChild(y);