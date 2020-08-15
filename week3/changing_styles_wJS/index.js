var helloWorld = [
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World",
    "Hello World"
    
]


for (var i = 0; i < helloWorld.length; i++) {
    var newH2 = document.createElement("h2")
    
    newH2.textContent = "Hello World"
    newH2.style.fontSize = "20px"
    newH2.style.fontWeight = "lighter"
    newH2.style.fontFamily = "sanSerif"
    newH2.style.color = "cornFlowerBlue"
    document.body.append(newH2)
    console.log(newH2)
}

document.querySelector("h2").classList.add("border")


