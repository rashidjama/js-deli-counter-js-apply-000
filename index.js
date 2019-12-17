let katzLine = [];
function takeANumber(katzLine, customer) {
  katzLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzLine.length} in line.`
}

let katzDeli = [];
function nowServing(katzDeli, name) {
  katzDeli.push(name)
  if(katzDeli.length === []) {
    return 'no one'
  } else {
  return `${katzDeli.slice(0,1)}`
  }
}

nowServing(katzDeli);