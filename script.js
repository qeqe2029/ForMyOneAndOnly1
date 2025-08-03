let noClickCount = 0;

function no() {
  noClickCount++;

  if (noClickCount === 1) {
    alert("BAKIT HINDI?!?!?!?!?!");
  } else if (noClickCount === 2) {
    alert("SO AYAW MO??????????????????? ");
  } else if (noClickCount === 3) {
    alert("Ganyanan pala ah ");
  } else {
    alert("EDI WAG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
}

function yes() {
     document.querySelector(".question").style.display = "none";  // Hide the question
  document.querySelector(".buttons").style.display = "none"; 
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");

  setInterval(createFlower, 300);
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("floating-flower");
  flower.innerText = getRandomFlower();

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 3 + "s"; // 4s–7s
  flower.style.fontSize = 20 + Math.random() * 30 + "px";

  document.body.appendChild(flower);


  setTimeout(() => {
    flower.remove();
  }, 8000);
}

function getRandomFlower() {
  const flowers = ["🌸", "🌺", "🌼", "💐", "🌷", "🌹", "🪷"];
  return flowers[Math.floor(Math.random() * flowers.length)];
}
