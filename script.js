const challenge = document.getElementById("challenge");
const trainer = document.getElementById("trainer");
const info = document.getElementById("info");
//Hover
challenge.addEventListener("mouseover", function(){info.innerHTML = "Challenge"});
challenge.addEventListener("mouseleave", function() {info.innerHTML = ""});
trainer.addEventListener("mouseover", function(){info.innerHTML = "Trainer"});
trainer.addEventListener("mouseleave", function() {info.innerHTML = ""});
//Click
challenge.addEventListener("click", function(){});
