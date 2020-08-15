var helloWorld = [
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World"
    
]

var newH1 = document.createElement("h1");


newH1.setAttribute("id", "hello");
newH1.setAttribute("class", "style");
newH1.textContent = "Hello World"
document.body.append(newH1)
console.log(newH1)

var helloList = document.getElementById("hello")

for (var i = 0; i < helloWorld.length; i++) {
    var newH1 = document.createElement("h1")
    newH1.textContent = "Hello World"
    document.body.append(newH1)
}



var names = [
"steve", 
"Larry", 
"joe",  
"shirley", 
"steph", 
"nate", 
"rick", 
"emily"

]

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }