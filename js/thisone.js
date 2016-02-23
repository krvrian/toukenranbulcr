function loadResos(){
  $("#resources").load("resources.html");
}

//  $("#party").load("party.html");
  
setInterval(function(reso){loadResos()}, 1000);