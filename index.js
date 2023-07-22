// Function to fetch data from the Newton API
function fetchData(operation, expression) {
  const apiUrl = `https://newton.now.sh/api/v2/${operation}/${encodeURIComponent(expression)}`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
}

// Function to show loading state in the result div
function showLoading() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";
}

// Function to display the result in the result div
function displayResult(result) {
  const resultDiv = document.getElementById("result");
  if (result !== null) {
    resultDiv.innerHTML = `<p><strong>Result:</strong> ${result}</p>`;
  } else {
    resultDiv.innerHTML = "Error occurred while fetching data.";
  }
}

// Function to perform the operation when the button is clicked
function performOperation() {
  const selectedOperation = document.getElementById("operation").value;
  const expression = document.getElementById("expression").value;

  // Show loading state while fetching data
  showLoading();

  fetchData(selectedOperation, expression)
    .then(displayResult);
}

// Event listener for the document
document.addEventListener("DOMContentLoaded", function() {
  // Get the logo element
  const logo = document.getElementById("logo");

  // Add event listener for mouseleave to blur the logo
  logo.addEventListener("mouseleave", function() {
    this.style.filter = "blur(2px)";
  });

  // Event listeners for specific elements using querySelector
  const operationSelect = document.querySelector('#operation');
  const expressionInput = document.querySelector('#expression');
  const button = document.querySelector('button');

  // Add event listener for the button click to perform the operation
  button.addEventListener('click', performOperation);

  // Add event listener for the keypress event on the expression input
  expressionInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      performOperation();
    }
  });

  // Add event listener for mouseleave to blur the logo
  logo.addEventListener('mouseleave', function() {
    this.style.filter = 'blur(2px)';
  });
});
