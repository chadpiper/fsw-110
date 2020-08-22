Object.keys(window).forEach(key => {
    if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event.type);
        });
    }
});
   
   
   
   
   
   
   //Blue when the mouse hovers over the square
    document.querySelector("div").addEventListener( 
                    "mouseover", function () { 
  
     document.querySelector("div").style.backgroundColor = "blue"  
                
}) 
    //Red when the mouse button is held down over the square
    document.querySelector("div").addEventListener( 
            "mousedown", function () { 
                
    document.querySelector("div").style.backgroundColor = "red" 
})
    //Yellow when the mouse button is let go over the square
    document.querySelector("div").addEventListener( 
        "mouseup", function () { 

    document.querySelector("div").style.backgroundColor = "yellow" 
})
    //Green when the mouse is double clicked in the square
    document.querySelector("div").addEventListener( 
    "dblclick", function () { 

    document.querySelector("div").style.backgroundColor = "green" 
})
    //Orange when the mouse scroll is used somewhere in the window
    document.querySelector("div").addEventListener( 
    "wheel", function () { 

    document.querySelector("div").style.backgroundColor = "orange" 
})