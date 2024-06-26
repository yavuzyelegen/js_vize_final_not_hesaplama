let screenValue = '';

function appendToScreen(value) {
  screenValue += value;
  document.getElementById('screen').value = screenValue;
}

function clearScreen() {
  screenValue = '';
  document.getElementById('screen').value = screenValue;
}

function calculate() {
  try {
    let result = eval(screenValue);
    document.getElementById('screen').value = result;
    screenValue = '';
  } catch (error) {
    document.getElementById('screen').value = 'Hata';
    screenValue = '';
  }
}
