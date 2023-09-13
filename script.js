document.getElementById('Convert').onclick = tempconvert;
document.getElementById('Clear').onclick = clearForm;

function tempconvert() {
  var fahrenheit = document.getElementById("Fahrenheit").value;
  var celsius = document.getElementById("Celsius").value;

  if (fahrenheit !== '') {
    celsius = (parseFloat(fahrenheit) - 32) / 1.8;
  } else if (celsius !== '') {
    fahrenheit = parseFloat(celsius) * 1.8 + 32;
  }

  document.getElementById('Fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
  document.getElementById('Celsius').value = parseFloat(celsius).toFixed(1);
}

function clearForm() {
  document.getElementById('Fahrenheit').value = '';
  document.getElementById('Celsius').value = '';
}