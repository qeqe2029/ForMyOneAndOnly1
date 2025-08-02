function no() {
  alert("BAKIT HINDI?!?!?!?!?!");
}

function yes() {
     document.querySelector(".question").style.display = "none";  // Hide the question
  document.querySelector(".buttons").style.display = "none"; 
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");
}
