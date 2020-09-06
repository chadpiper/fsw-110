/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */

function showKeyCode () {
    var character = document.getElementById("character").value.substring(0, 1);
    var code = document.getElementById("character").value.charCodeAt(0);
    var msg = "The Key Code for the \"" + character + "\" character is " + code + ".";
    alert(msg);
}