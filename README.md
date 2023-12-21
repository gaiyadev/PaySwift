# PaySwift Payment Integration

Welcome to PaySwift, your gateway to seamless inline payments for your fintech app!

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

PaySwift is a JavaScript library that allows you to easily integrate seamless inline payments into your fintech application. Inspired by the likes of Paystack and Flutterwave, PaySwift simplifies the process of collecting payments by providing a customizable and user-friendly payment information popup.

## Installation

To integrate PaySwift into your project, follow these simple steps:

1. Include the PaySwift script in your HTML file:

   ```html
   <script src="https://4825-102-91-71-22.ngrok-free.app/paySwift.js"></script>


## Initialize PaySwift with your configuration:

```bash
    const paymentConfig = {
  email: 'user@example.com',
  amount: 100.00,
  key: 'Pub_key',
  ref: '',

  // Add more configuration options as needed
};

const paymentInstance = PaySwift.setup(paymentConfig);

```

## Trigger the payment popup when needed:

```bash
paymentInstance.openIframe();

```

## Usage
Here's a basic example of how to use PaySwift in your application:

```bash
// Initialize PaySwift with your configuration
const paymentConfig = {
  email: 'user@example.com',
  amount: 100.00,
  // Add more configuration options as needed
};

const paymentInstance = PaySwift.setup(paymentConfig);

// Open the payment popup when a payment is requested
paymentInstance.openIframe();


```