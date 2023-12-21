  const PaystackPop = {
    setup: function (config) {
      console.log('PaystackPop.setup called with config:', config);
      // You can add your logic here or return an object with necessary methods
      return {
          openIframe: function () {
            var email = config.email;
            var amount = config.amount;
           openPaymentInfoPopup(email, amount)
          },
        //   onClose: function () {
        //     console.log('PaystackPop.setup was close:', config);
        //   }
        // Add more methods as needed
      };
    }
  };


 function openPaymentInfoPopup(email, amount) {
    // Create the overlay
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create the popup content
     var popupContent = `
      <div id="paymentInfoPopup" class="payment-info-popup">
        <div class="popup-header">
          <h2>Payment Information</h2>
        </div>
        <div class="popup-body">
          <p>Email: ${email}</p>
          <p>Amount: ${amount}</p>
          <div class="atm-pin-container">
            <label for="atmPin">ATM PIN:</label>
            <input type="password" id="atmPin" required>
          </div>
        </div>
        <div class="popup-footer">
          <button onclick="submitPayment()">Submit Payment</button>
        </div>
      </div>
    `;

    // Create the popup element
    var popup = document.createElement('div');
    popup.id = 'paymentInfoPopup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.border = '1px solid #ccc';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '100';

    popup.innerHTML = popupContent;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Show the overlay and popup
    overlay.style.display = 'block';
     popup.style.display = 'block';
     var atmPin = document.getElementById('atmPin').value;
      console.log(atmPin)
 }
  
function submitPayment() {
    console.log('d')
}