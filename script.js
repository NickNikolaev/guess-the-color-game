// Declare and initialize variables
var numberOfShapes = 6;
var colors = [];
var correctColor;
var shapes = document.querySelectorAll(".shapes");
var redValue = document.querySelector("#red-value");
var greenValue = document.querySelector("#green-value");
var blueValue = document.querySelector("#blue-value");
var messageDisplay = document.querySelector("#messageArea");
var newColorButton = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");
var modeToggle = document.getElementById("difficulty-mode");


init();

function init() {
  modeToggle.checked = true;
  newColorButton.addEventListener("click", function() { reset(); });
	setUpMode();
	setUpShapes();
	reset();
}


function setUpMode() {
	modeToggle.addEventListener("click", function() {
		numberOfShapes = (this.checked) ? 6 : 3;
		reset();
	});
}

function setUpShapes() {
	for (var i = 0; i < shapes.length; i++) {
		shapes[i].addEventListener("click", function() {
			var selectedColor = this.style.backgroundColor;
			this.classList.add("shadow-3d"); // To add shadow if was removed before
			if (selectedColor === correctColor) {
				messageDisplay.textContent = "Correct";
				newColorButton.textContent = "Play again?";
				changeColors(selectedColor);
			} else {
				this.style.backgroundColor = "#E2E1E0";
				this.classList.remove("shadow-3d"); // To remove shadow on the shapes removed
				messageDisplay.textContent = "Try again";
			}
		})
	}
}

function reset() {
	colors = generateRandomColors(numberOfShapes);
	correctColor = pickColor();
	rgb = splitRGB(correctColor);
	redValue.textContent = rgb[0];
	greenValue.textContent = rgb[1];
	blueValue.textContent = rgb[2];
	newColorButton.textContent = "New colors";
	messageDisplay.textContent = "";

  // Hide shapes if color is not assigned. Display them otherwise
	for (i = 0; i < shapes.length; i++) {
		if (colors[i]) {
			shapes[i].style.display = "block";
			shapes[i].style.backgroundColor = colors[i];
		} else {
			shapes[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for (var i = 0; i < shapes.length; i++) {
		shapes[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numberOfShapes) {
  var colorsArray = [];
  for (var i = 0; i < numberOfShapes; i++) {
    colorsArray.push(randomColor());
  }
  return colorsArray;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Return an array of RGB codes
function splitRGB(rgbString) {
	return rgb = correctColor.match(/\d+/g);
}