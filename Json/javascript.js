// Function to handle the IP address lookup using the specified API
function lookupIPAddress() {
    const ipInput = document.querySelector('.input-text');
    const ipAddress = ipInput.value;
  
    // Make a request to the specified IP address lookup API
    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then(response => response.json())
      .then(data => {
        // Format the API response as per custom formatting requirements
        const formattedData = `IP ..... <span class="green">${data.query}</span>
Country  <span class="green">${data.country}</span>
Region . <span class="green">${data.regionName}</span>
City ... <span class="green">${data.city}</span>
Zip .... <span class="green">${data.zip}</span>
Coords . <span class="green">${data.lat}, ${data.lon}</span>
Org .... <span class="green">${data.org}</span>
AS ..... <span class="green">${data.as}</span>
ISP .... <span class="green">${data.isp}</span>`;
  
        // Display the formatted API output in the widget's output area
        const outputText = document.querySelector('.output-text');
        outputText.innerHTML = formattedData;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Clear the input field
    ipInput.value = '';
  }
  
  // Event listener for handling the IP address lookup when "Enter" key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.classList.contains('input-text')) {
      e.preventDefault(); // Prevent the default behavior of the "Enter" key
      lookupIPAddress();
    }
  });
  
function PortScanner() {
/* intentionally left blank */
}

PortScanner.prototype.init = function() {
const self = this;
const ports = [80, 443, 8080]; // Example list of ports to scan

$(".pscan-text").each(function(index) {
    const target = $(this).text();
    const parts = target.split(":");
    const host = parts[0];

    const element = $(this);
    const outputElement = element.next(".pscan-text-output");

    self.pingIP(function(pingResult) {
    const formattedResult = `Ping Result: <span class="green">${pingResult}</span>`;

    outputElement.html(formattedResult);
    }, host);
});
};

PortScanner.prototype.pingIP = function(callback, target) {
const img = new Image();
img.onload = function() {
    callback('Success');
};
img.onerror = function() {
    callback('Failed');
};
img.src = `http://${target}`;
};

const portscanner = new PortScanner();
portscanner.init();

