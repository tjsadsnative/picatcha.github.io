var petla;
var payload = 1000;
//payload is the amount of data sent per second
var i = 10;
// i is the amount of data sent, in Kb per s
var j = 100;
// j is the bandwidth in 100s of Kbs per s
var k = 1;
// k is the number of channels (max 3 in this example)
var tablica = [];
// tablica will hold the available channels, once they're added and/or removed
var l = 0;
// l helps us distribute the payload among channels

//when the document is loaded, the packets start flowing at the rate of 10 Kb/s

document.onLoad = function() {
  petla = setInterval(generujTo, payload);
}();

//Let's grab elements we're going to use later on

var kont = document.getElementById("bandwidth1");
var band = document.getElementById("band");
var left = document.getElementById("left");
var right = document.getElementById("right");
var data = document.getElementById("data");
var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");
var data2 = document.getElementById("data2");

/*the following is a function that generates divs (packets), and once they're through the channel, kills them.*/

function generujTo() {
  tablica = (document.querySelectorAll(".band"));
  // Let's force the packets to be generated randomly in channels
  l = Math.floor((Math.random() * tablica.length));
  var timer = 0;
  //the timer needs to be zeroed for every new, generated div
  var myVar;
  //this is the variable we're going to use to iterate packet's position. We need to clear it once the packet's through.
  var temp = document.createElement("div");
  // the new div is created...
  temp.setAttribute("class", "packet");
  //... assigned the 'packet' class...
  temp.style.left = timer + "px";
  // ...positioned at the beginning of the parent div...
  tablica[l].appendChild(temp);
  // ... and, finally, added to the DOM.
  myVar = setInterval(function() {
    // Then, the packet starts moving through the parent div 
    timer += 10;
    // With each iteration, we add 10px to the packet's position.
    temp.style.left = timer + "px";
    l++;
    if(l >= tablica.length) {
      l = 0;
    }
    if (timer > 1000) {
      //once the packet's out of sight...
      temp.parentNode.removeChild(temp);
      //...we remove it
      clearInterval(myVar);
    }
  }, 100);
  //100 means an iteration every 100 milliseconds
}

// last thing: event listeners on navigation items 

left.addEventListener("click", function() {
  payload += 100;
/*This one's counter-intuitive. The minus sign actually adds 100s to the base variable. Why? Because it's the iteration cycle (more means less frequent). */
  if (payload > 1000) {
    payload = 1000;
  }
  i -= 10;
  if (i < 10) {
    i = 10;
  }
  data.innerHTML = "data rate: " + i + " Kb/s";
  clearInterval(petla);
  petla = setInterval(generujTo, payload);
});
right.addEventListener("click", function() {
  payload -= 100;
/*This one's counter-intuitive. The plus sign actually removes 100s from the base variable. Why? Because it's the iteration cycle (more means less frequent). */
  if (payload < 100) {
    payload = 100;
  }
  i += 10;
  if (i > 100) {
    i = 100;
  }
  data.innerHTML = "data rate: " + i + " Kb/s";
  clearInterval(petla);
  petla = setInterval(generujTo, payload);
});

left.addEventListener("mouseover", function() {
  if (payload < 1000) {
    left.style.backgroundColor = "firebrick";
    left.style.cursor = "pointer";
  } else {
    left.style.cursor = "default";
  }
});

right.addEventListener("mouseover", function() {
  if (payload > 100) {
    right.style.backgroundColor = "firebrick";
    right.style.cursor = "pointer";
  } else {
    right.style.cursor = "default";
  }
});

left.addEventListener("mouseout", function() {
  left.style.backgroundColor = "gray";
});

right.addEventListener("mouseout", function() {
  right.style.backgroundColor = "gray";
});

left2.addEventListener("click", function() {
  k--;
  if (k == 1) {
    var temp = document.getElementById("band2");
    temp.parentNode.removeChild(temp);
    data2.innerHTML = "bandwidth: 100 Kb/s";
  }
  
 if (k == 2) {
    var temp2 = document.getElementById("band3");
    temp2.parentNode.removeChild(temp2);
    data2.innerHTML = "bandwidth: 200 Kb/s";
 }
    if (k < 1) {
    k = 1;
    data2.innerHTML = "bandwidth: 100 Kb/s";
  }
});
right2.addEventListener("click", function() {
  k++;
  if (k == 2) {
    var temp2 = document.createElement("div");
    temp2.setAttribute("class", "band");
    temp2.setAttribute("id", "band"+k);
    kont.appendChild(temp2);
    temp2.style.top = (band.offsetTop - 10) + "px";
    data2.innerHTML = "bandwidth: 200 Kb/s";
  } 
  if (k == 3) {
    var temp3 = document.createElement("div");
    temp3.setAttribute("class", "band");
    temp3.setAttribute("id", "band"+k);
    kont.appendChild(temp3);
    temp3.style.top = (band.offsetTop + 10) + "px";
    data2.innerHTML = "bandwidth: 300 Kb/s";
  }  
 if (k > 3) {
   k = 3;
 }
});

left2.addEventListener("mouseover", function() {
  if (k > 1) {
    left2.style.backgroundColor = "firebrick";
    left2.style.cursor = "pointer";
  } else {
    left2.style.cursor = "default";
  }
});

right2.addEventListener("mouseover", function() {
  if (k < 3) {
    right2.style.backgroundColor = "firebrick";
    right2.style.cursor = "pointer";
  } else {
    right2.style.cursor = "default";
  }
});

left2.addEventListener("mouseout", function() {
  left2.style.backgroundColor = "gray";
});

right2.addEventListener("mouseout", function() {
  right2.style.backgroundColor = "gray";
});