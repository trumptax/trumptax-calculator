// An array of individual costs payed for by U.S. tax payers:
const baselineCosts = [
  // mar a logo vacation
  // http://www.politico.com/story/2017/02/trump-mar-lago-taxpayers-234562
  // Now three of these:
  // http://www.cbsnews.com/news/president-trump-mar-a-lago-trips-cost-taxpayers-millions/
  // Slightly more conservative (literally, not politically) figures:
  // https://www.washingtonpost.com/news/politics/wp/2017/03/17/how-much-is-donald-trumps-travel-and-protection-costing-anyway/
  2000000 * 3,

  // Eric Trump's Uruguay trip
  // http://thehill.com/homenews/administration/317863-eric-trump-uruguay-trip-cost-taxpayers-98k-report
  98000
];

// All individual costs added to a single value:
const baseline = baselineCosts.reduce(function(accumulator, value, index) {
  return accumulator + value;
}, 0);

// Cost for security in NYC
// http://money.cnn.com/2016/11/21/news/protecting-donald-trump/
// Updated, slightly more conservative (literally, not politically) figures:
// https://www.washingtonpost.com/news/politics/wp/2017/03/17/how-much-is-donald-trumps-travel-and-protection-costing-anyway/
const nycCostPerYear = 200000.00 * 365;

// The number of milliseconds per year:
const msPerYear = 31536000000;

// The cost of NYC security every millisecond:
const nycCostPerMs = nycCostPerYear / msPerYear;

// Trump's start date:
const trumpStartDate = new Date('Jan 20 2017 12:00:00 EST');

// The above, in milliseconds:
const trumpStartMs = trumpStartDate.getTime();

/**
 * Calculates the cost of Trump's tax burden at `date`.
 */
exports.calculate = function calculate(date) {
  if (date == undefined) {
    date = new Date();
  }
  const elapsedTime = date.getTime() - trumpStartMs;
  return (elapsedTime * nycCostPerMs) + baseline;
}

/**
 * Formats `value` in US Dollars
 */
exports.usdollars = function usdollars(value) {
  const formatted = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatted;
}
