// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {//55
  var half_dollar = (currency / 50);//0.xxx
  var quarter_dollar = (currency%50)/25;//0,xxx
  var dime = ((currency%50)%25)/10;//0.1
  var nickel = (((currency%50)%25)%10)/5;
  var penny = currency%5;
  var output = {};
  if (half_dollar>=1) {
    output.H = Math.floor(half_dollar);
  };
  if (quarter_dollar>=1) {
    output.Q = Math.floor(quarter_dollar);
  }
  if (dime>=1) {
    output.D = Math.floor(dime);
  };
  if (nickel>=1) {
    output.N = Math.floor(nickel);
  };
  if (penny>=1) {
    output.P = Math.floor(penny);
  };

  if (currency === 0) {
    return {};
  }
  else if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  else {
    return output;
  };
}
