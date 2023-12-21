const PaySwift = {
    setup: function (config) {
        console.log('PaySwift.setup called with config:', config);

        return {
            openIframe: function () {
                var email = config.email;
                var amount = config.amount;
                openPaymentInfoPopup(email, amount);
            },
            // Add more methods as needed
        };
    }
};

function openPaymentInfoPopup(email, amount) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

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
                <button id="submitPaymentBtn">Submit Payment</button>
            </div>
        </div>
    `;

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
    document.body.appendChild(popup);

    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Use event listener instead of inline HTML attribute
    document.getElementById('submitPaymentBtn').addEventListener('click', function () {
        submitPayment();
    });
}

function submitPayment() {
    var atmPin = document.getElementById('atmPin').value;
    console.log('Submitting payment with ATM PIN:', atmPin);

    // Add logic to handle payment submission
}
