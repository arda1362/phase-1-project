document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from the API and use forEach to display each object in the result div
  function fetchData() {
    const operation = document.getElementById('operation').value;
    const expression = encodeURIComponent(document.getElementById('expression').value);
    const apiUrl = `https://newton.now.sh/api/v2/${operation}/${expression}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; // Clear the result div before adding new items

        if (Array.isArray(data)) {
          data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const operationPara = document.createElement('p');
            operationPara.textContent = `Operation: ${item.operation}`;
            itemDiv.appendChild(operationPara);

            const expressionPara = document.createElement('p');
            expressionPara.textContent = `Expression: ${item.expression}`;
            itemDiv.appendChild(expressionPara);

            const resultPara = document.createElement('p');
            resultPara.textContent = `Result: ${item.result}`;
            itemDiv.appendChild(resultPara);

            resultDiv.appendChild(itemDiv);
          });
        } else {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
          const resultPara = document.createElement('p');
          resultPara.textContent = `Result: ${data.result}`;
          itemDiv.appendChild(resultPara);
          resultDiv.appendChild(itemDiv);
        }
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  // Perform the operation when the button is clicked
  function performOperation() {
    fetchData();
  }

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

  // Get the logo element
  const logo = document.getElementById('logo');

  // Add event listener for mouseleave to blur the logo
  logo.addEventListener('mouseleave', function() {
    this.style.filter = 'blur(2px)';
  });
});
