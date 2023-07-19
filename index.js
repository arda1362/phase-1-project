function performOperation() {
  var operation = document.getElementById("operation").value;
  var expression = encodeURIComponent(document.getElementById("expression").value);
  var url = "https://newton.now.sh/api/v2/" + operation + "/" + expression;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var result = data.result;
      document.getElementById("result").textContent = "Result: " + result;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// Callback function for document event listener
function handleDocumentEvent() {
  console.log('Document event listener triggered');
  fetchData()
    .then(result => {
      const output = document.getElementById('result');
      output.innerHTML = JSON.stringify(result, null, 2);
    })
    .catch(error => console.log(error));
}

// Callback function for element event listener
function handleElementEvent() {
  console.log('Element event listener triggered');
  fetchData()
    .then(result => {
      const output = document.getElementById('result');
      output.innerHTML = JSON.stringify(result, null, 2);
    })
    .catch(error => console.log(error));
}

// Callback function for blur logo event listener
function handleBlurLogoEvent() {
  console.log('Blur logo event listener triggered');
  fetchData()
    .then(result => {
      const output = document.getElementById('result');
      output.innerHTML = JSON.stringify(result, null, 2);
    })
    .catch(error => console.log(error));
}

// Event listener for the document
document.addEventListener('keydown', handleDocumentKeydown);
document.addEventListener('keyup', handleDocumentKeyup);
document.addEventListener('keypress', handleDocumentKeypress);

// Event listener for specific elements using querySelector
const element = document.querySelector('#elementId');
const htmlElement = document.querySelector('.htmlElementClass');
const inputElement = document.querySelector('input[type="text"]');

if (element) {
  element.addEventListener('keydown', handleElementKeydown);
  element.addEventListener('keyup', handleElementKeyup);
  element.addEventListener('keypress', handleElementKeypress);
}

if (htmlElement) {
  htmlElement.addEventListener('keydown', handleHTMLElementKeydown);
  htmlElement.addEventListener('keyup', handleHTMLElementKeyup);
  htmlElement.addEventListener('keypress', handleHTMLElementKeypress);
}

if (inputElement) {
  inputElement.addEventListener('keydown', handleHTMLInputElementKeydown);
  inputElement.addEventListener('keyup', handleHTMLInputElementKeyup);
  inputElement.addEventListener('keypress', handleHTMLInputElementKeypress);
}

// Event handler functions
function handleDocumentKeydown(event) {
  // Handle keydown event for the document
  console.log('Document keydown event:', event.key);
}

function handleDocumentKeyup(event) {
  // Handle keyup event for the document
  console.log('Document keyup event:', event.key);
}

function handleDocumentKeypress(event) {
  // Handle keypress event for the document
  console.log('Document keypress event:', event.key);
}

function handleElementKeydown(event) {
  // Handle keydown event for the targeted element
  console.log('Element keydown event:', event.key);
}

function handleElementKeyup(event) {
  // Handle keyup event for the targeted element
  console.log('Element keyup event:', event.key);
}

function handleElementKeypress(event) {
  // Handle keypress event for the targeted element
  console.log('Element keypress event:', event.key);
}

function handleHTMLElementKeydown(event) {
  // Handle keydown event for the targeted HTMLElement
  console.log('HTMLElement keydown event:', event.key);
}

function handleHTMLElementKeyup(event) {
  // Handle keyup event for the targeted HTMLElement
  console.log('HTMLElement keyup event:', event.key);
}

function handleHTMLElementKeypress(event) {
  // Handle keypress event for the targeted HTMLElement
  console.log('HTMLElement keypress event:', event.key);
}

function handleHTMLInputElementKeydown(event) {
  // Handle keydown event for the targeted HTMLInputElement
  console.log('HTMLInputElement keydown event:', event.key);
}

function handleHTMLInputElementKeyup(event) {
  // Handle keyup event for the targeted HTMLInputElement
  console.log('HTMLInputElement keyup event:', event.key);
}

function handleHTMLInputElementKeypress(event) {
  // Handle keypress event for the targeted HTMLInputElement
  console.log('HTMLInputElement keypress event:', event.key);
}
