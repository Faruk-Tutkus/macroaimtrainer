const challenge = document.getElementById("challenge");
const trainer = document.getElementById("trainer");
const info = document.getElementById("info");
//Hover
challenge.addEventListener("mouseover", function(){info.textContent = "Challenge"});
challenge.addEventListener("mouseleave", function() {info.textContent = ""});
trainer.addEventListener("mouseover", function(){info.textContent = "Tracking"});
trainer.addEventListener("mouseleave", function() {info.textContent = ""});
//Click
challenge.addEventListener("click", function(){});
