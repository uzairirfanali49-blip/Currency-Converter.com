// Fixed exchange rates (base = USD)
const rates = {
  "USD": 1,
  "EUR": 0.92,
  "GBP": 0.78,
  "PKR": 278,
  "INR": 83,
  "JPY": 146,
  "CNY": 7.2,
  "AUD": 1.52,
  "CAD": 1.36,
  "SAR": 3.75,
  "AED": 3.67,
  "CHF": 0.87,
  "ZAR": 18.6,
  "TRY": 32.4,
  "BDT": 110,
  "LKR": 300,
  "THB": 35.5,
  "KRW": 1330,
  "MYR": 4.7,
  "NGN": 1600
};

// Currency full names
const currencyNames = {
  "USD": "US Dollar",
  "EUR": "Euro",
  "GBP": "British Pound",
  "PKR": "Pakistani Rupee",
  "INR": "Indian Rupee",
  "JPY": "Japanese Yen",
  "CNY": "Chinese Yuan",
  "AUD": "Australian Dollar",
  "CAD": "Canadian Dollar",
  "SAR": "Saudi Riyal",
  "AED": "UAE Dirham",
  "CHF": "Swiss Franc",
  "ZAR": "South African Rand",
  "TRY": "Turkish Lira",
  "BDT": "Bangladeshi Taka",
  "LKR": "Sri Lankan Rupee",
  "THB": "Thai Baht",
  "KRW": "South Korean Won",
  "MYR": "Malaysian Ringgit",
  "NGN": "Nigerian Naira"
};

// Populate dropdowns
function populateCurrencies() {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");

  Object.entries(currencyNames).forEach(([code, name]) => {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.text = `${code} - ${name}`;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.text = `${code} - ${name}`;
    toCurrency.appendChild(option2);
  });

  // Default selections
  fromCurrency.value = "USD";
  toCurrency.value = "PKR";
}

// Convert currency (offline calculation)
function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  if (!amount || amount <= 0) {
    resultDiv.innerText = "⚠️ Please enter a valid amount.";
    return;
  }

  if (!rates[from] || !rates[to]) {
    resultDiv.innerText = "❌ Conversion rate not available.";
    return;
  }

  // Convert: first to USD, then to target
  const amountInUSD = amount / rates[from];
  const converted = amountInUSD * rates[to];

  resultDiv.innerText =
    `${amount} ${from} (${currencyNames[from]}) = ${converted.toFixed(2)} ${to} (${currencyNames[to]})`;
}

// Run when page loads
document.addEventListener("DOMContentLoaded", populateCurrencies);
