
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('264.14');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15000,
    years: 20,
    rate: 12
  };
  expect(calculateMonthlyPayment(values)).toEqual('1800.00')
});

/// etc
