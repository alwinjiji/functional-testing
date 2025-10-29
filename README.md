# Playwright Functional Testing Project

This repository contains Playwright test scripts created for functional testing of web applications.

## 📋 Project Overview
This project automates UI test scenarios using the Playwright framework.  
It helps ensure that all key user flows are working as expected.

## 🧰 Tools & Technologies
- *Language:* JavaScript  
- *Framework:* Playwright  
- *Editor:* Visual Studio Code  
- *Version Control:* Git & GitHub  

## ⚙ Installation Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/alwinjiji/functional-testing.git


   functional-testing/
│
├── tests/
│   ├── login.spec.js          # Login test case
│   ├── Accounts.spec.js       # Account menu test case
│   ├── placeOrder.spec.js     # Order placement test case
│
├── playwright.config.js       # Playwright configuration file
├── package.json               # Project metadata and dependencies
├── README.md                  # Project documentation

Example Test Scenarios
🔹 Login Test (login.spec.js)

Opens GoTrade login page

Enters valid credentials

Clicks login

Verifies successful navigation to dashboard

🔹 Accounts Test (Accounts.spec.js)

Navigates to various account sections

Validates UI visibility for “Admin”, “Gorisk”, and “Godsafe” tabs

🔹 Place Order Test (placeOrder.spec.js)

Fills order form

Clicks “Trade” button

Verifies confirmation page
