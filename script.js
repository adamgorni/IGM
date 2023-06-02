// targeting objects

const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const sizeInput = document.getElementById('sizeInput');
const iconSizeInput = document.getElementById('iconSizeInput');
const roundInput = document.getElementById('roundInput');
const colorInput = document.getElementById('colorInput');
const textColorInput = document.getElementById('textColorInput');
const nameInput = document.getElementById('nameInput');
const opacityInput = document.getElementById('opacityInput');

const generateBtn = document.getElementById('generate');
const gitemBtn = document.getElementById('gitem');

const resultWindow = document.getElementById('resultSection');

// example settings



gitemBtn.addEventListener('click', function(){
  
    widthInput.value = ('400');
    heightInput.value = ('100');
    sizeInput.value = ('40');
    iconSizeInput.value = ('45');
    roundInput.value = ('10');
    opacityInput.value = ('0.8');
    nameInput.value = ('DominikRupiński')
});

// creating graphic

generateBtn.addEventListener('click', function(){

while (resultWindow.firstChild) {
    resultWindow.removeChild(resultWindow.firstChild);
  }

var resultDiv = document.createElement('div');
resultDiv.id = 'igpicture';
resultDiv.innerHTML = (`<i class="fa-brands fa-instagram" style="color: ${textColorInput.value}; font-size: ${iconSizeInput.value}px; font-weight: bold;"></i>` + `<p style="color: ${textColorInput.value};"> ${nameInput.value} </p>`);
resultDiv.style.fontSize = (sizeInput.value + "px");
resultDiv.style.backgroundColor = colorInput.value;
resultDiv.style.width = widthInput.value + 'px';
resultDiv.style.height = heightInput.value + 'px';
resultDiv.style.borderRadius = roundInput.value + 'px';
resultDiv.style.color = textColorInput.value;
resultDiv.style.opacity = opacityInput.value;

resultWindow.appendChild(resultDiv);

// converting html into png

html2canvas(document.getElementById('igpicture'), {
    backgroundColor: null,
    allowTaint: true,
    useCORS: true
  }).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");

    resultWindow.removeChild(resultWindow.firstChild);
    resultWindow.appendChild(image);
});
});