window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
    } 
  }

function setupIntialValues() {
  const values = { amount: 20000, years: 20, rate: 5.0 };
  const amountInput = document.getElementById('loan-amount');
  const yearsInput = document.getElementById('loan-years');
  const rateInput = document.getElementById('loan-rate');
  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;
  update();
}

function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate/100
  const n = Math.floor(values.years*12);
  return (
    (values.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n)) 
  ).toFixed(2)
}

function updateMonthly(monthly) {
  const monthlyInput = document.getElementById('monthly-payment');
  monthlyInput.innerText = '$' + monthly;
}

function update() {
  const currentInputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentInputValues));
}