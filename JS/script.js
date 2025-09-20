document.getElementById("glowButton").addEventListener("click", function() {
  const inputValue = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  
  if (inputValue.trim() !== "") {
    output.textContent = "You typed: " + inputValue;
  } else {
    output.textContent = "Please enter something!";
  }
});