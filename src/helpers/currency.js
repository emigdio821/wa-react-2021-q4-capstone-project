const formatCurrency = (number) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(number);

export default formatCurrency;
