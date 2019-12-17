let katzLine = [];
function takeANumber(katzLine, customer) {
  katzLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzLine.length} in line.`
}