



console.log(document.getElementById("con").innerHTML)
setInterval(function() {
    let date = new Date();
    document.getElementById("con").innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString)
},1000)
