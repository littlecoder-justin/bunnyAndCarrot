$("#field").click(function (event) {
    var rabbit = document.getElementById("rabbit");
    rabbit.style.marginLeft = event.offsetX - 30 + "px";
    rabbit.style.marginTop = event.offsetY - 50 + "px";
    
    // Check if found carrot
    if ((event.offsetX > carrotX - 50) && (event.offsetX < carrotX + 50) 
        && (event.offsetY > carrotY - 50) && (event.offsetX > carrotX - 50)) {
        icon.innerHTML = "&#129365;";
        foundIt = true;
    }
    else {
        var thing = Math.floor(Math.random()*6);
        icon.innerHTML = found[thing];
    }
    icon.style.position = 'absolute';
    icon.style.top = event.offsetY + 250 + 'px';
    icon.style.left = event.offsetX + 'px';
    document.body.appendChild(icon);
    
    if ((thing > 0) && (thing < 4)) {
        chance = chance - 1;
    }
    else if (thing == 0) {
        chance = 0;
    }
    
    if (foundIt) {
        document.getElementById("prompt").innerHTML = "You Win! &#128515;";
        document.getElementById('field').style.pointerEvents = 'none';
    }
    else if (chance <= 0) {
        document.getElementById("prompt").innerHTML = "You Lose! &#128577;";
        document.getElementById('field').style.pointerEvents = 'none';
    }
    else {  
        var prompt = "Keep going! &#128521; Chance(s) left:" + chance;
        if (carrotX > event.offsetX) {
            prompt = prompt + " Move right";
        }
        else {
            prompt = prompt + " Move left";
        }
        
        if (carrotY > event.offsetY) {
            prompt = prompt + " and down";
        }
        else {
            prompt = prompt + " and up";
        }
        
        document.getElementById("prompt").innerHTML = prompt;
    }
    
});

var foundIt = false;
//Making the random place of the carrot
var Carrot = document.getElementById("carrot");
var carrotX = Math.random()*800;
var carrotY = Math.random ()*500;

//the thing you are to get
// found = ["bomb", "tulip", "rose", "green salad", "potato", "tomato"]
var found = ['&#x1f4a3;', '&#127799;', '&#127801;', '&#x1f41b;', '&#129367;', '&#129364;', '&#127813;'];

var icon = document.createElement("h1");
var chance = 3;